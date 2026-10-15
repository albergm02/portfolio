---
title: "AreyaWeb"
description: "Infraestructura completa de administración de sistemas sobre Debian 12: servidor web, servicios de correo, CMS, backups automatizados y monitorización."
year: 2024
category: "systems"
status: "academic"
stack: ["Debian 12", "Apache2", "MariaDB", "Postfix", "Dovecot", "Perl", "Bash", "Moodle", "WordPress", "Roundcube"]
featured: true
order: 3
links:
  repo: "https://github.com/albergm02/SystemAdministration"
highlights:
  - "Stack completo de servidor: web, correo, base de datos y CMS sobre Debian 12."
  - "Autenticación unificada de usuarios entre servicios con verificación por email."
  - "Scripts CGI en Perl con gestión de sesiones y conexión a MariaDB vía DBI."
  - "Backups automatizados con crontab y monitorización de servicios."
---

## El proyecto

AreyaWeb es un proyecto integral de **administración de sistemas** que despliega desde cero una infraestructura completa de servicios sobre **Debian 12** en una máquina virtual, simulando el entorno real de una empresa o institución académica.

El objetivo no era solo instalar servicios, sino **hacerlos convivir**: autenticación unificada de usuarios entre plataformas, verificación por correo electrónico, roles diferenciados, backups automatizados, monitorización en tiempo real y un sistema propio de gestión de usuarios escrito en **Perl**.

El proyecto cubre el ciclo completo: desde la instalación del sistema operativo hasta la puesta en producción de una plataforma educativa (Moodle) y una plataforma de blogs (WordPress), pasando por el correo electrónico y una base de datos central.

## Servicios desplegados

| Servicio | Tecnología | Función |
| :--- | :--- | :--- |
| **Servidor web** | Apache2 + Suexec | Alojamiento de servicios y ejecución de scripts como `www-data` |
| **HTTPS** | OpenSSL | Certificado autofirmado para tráfico cifrado |
| **Plataforma educativa** | Moodle | Gestión de cursos, alumnos y recursos académicos |
| **Plataforma de blogs** | WordPress | Sistema de blogs multiusuario |
| **Servidor de correo** | Postfix + Dovecot | Envío, recepción y almacenamiento de correo (SMTP/IMAP/POP3) |
| **Webmail** | Roundcube | Interfaz web para leer y gestionar el correo |
| **Base de datos** | MariaDB | Base de datos `areyadb` para usuarios y servicios |
| **Gestión de usuarios** | Scripts CGI en Perl | Registro, verificación por email, login, cambio de contraseña |
| **Monitorización** | Apache `server-status` | Panel de estado en tiempo real de servicios y rendimiento |
| **Backups** | `crontab` + `mysqldump` | Backups diarios de la base de datos |

## Arquitectura

### Configuración base del sistema

- **Hostname**: `areya`.
- **IP estática**: `192.168.1.38`.
- **Particionado**: `sda1` para datos de usuario con cuotas; `/var` para servicios web y scripts.
- **SSH securizado**: puerto cambiado a `2203` (evita escaneos automatizados), timeout de login configurado, SFTP activo.

### Gestión de usuarios y grupos

- Grupos del sistema: `student` (GID 2000) y `teacher` (GID 2001).
- Usuario administrador `admin` incluido en `sudoers`, encargado de ejecutar los scripts del servidor.
- Directorio `skel` personalizado con términos y condiciones y enlaces simbólicos a servicios y recursos compartidos.

### Servidor web

- **Apache2** con **Suexec**: los scripts se ejecutan como `www-data`, evitando que un usuario comprometa el servidor.
- **PHP** instalado para dar soporte a Moodle y WordPress.
- **OpenSSL** con certificado autofirmado para HTTPS.
- Módulos habilitados: `cgi`, `userdir`, `ssl`.

## Gestión de usuarios con scripts CGI

El corazón del sistema es un conjunto de **scripts CGI en Perl** que gestionan el ciclo de vida completo del usuario: desde el registro hasta el cierre de sesión.

| Script | Función |
| :--- | :--- |
| `registro.cgi` | Registra nuevos usuarios y envía un correo de verificación. |
| `confirmar.cgi` | Activa la cuenta y redirige al usuario según su rol. |
| `direcciones.cgi` | Redirige a usuarios ya confirmados a su dashboard. |
| `iniciarSesion.cgi` | Login mediante autenticación PAM. |
| `cerrarSesion.cgi` | Cierra la sesión del usuario. |
| `modificarContra.cgi` | Cambio de contraseña validando la anterior. |
| `modificarPerfil.cgi` | Actualización de nombre, apellidos y correo en la base de datos. |

**Librerías CPAN utilizadas**: `CGI`, `CGI::Session`, `DBI`, `Email::Send::SMTP::Gmail`, `Linux::usermod`, `MIME::Base64`, entre otras.

### Flujo de registro

El registro sigue un proceso de varios pasos: el usuario rellena el formulario, se guarda en MariaDB con estado pendiente, se envía un email de verificación, el usuario hace clic en el enlace recibido, la cuenta se activa con el rol asignado y finalmente se redirige automáticamente a su dashboard.

## Servidor de correo

- **Postfix**: configurado para dominio local con límites de tamaño de buzón y de mensajes.
- **Dovecot**: soporte IMAP y POP3 para clientes de correo.
- **Roundcube**: webmail accesible desde el navegador, con SMTP ajustado para uso local.

Todo el flujo de correo se probó enviando emails reales a través de Gmail SMTP para la verificación de cuentas.

## Plataformas web

### Moodle

Instalado desde el tarball oficial, con la base de datos y el archivo `config.php` configurados manualmente. Accesible a través de un VirtualHost dedicado en Apache.

### WordPress

Descargado y extraído desde la fuente oficial, con base de datos y usuario propios. Configurado para permitir blogs y publicaciones generados por usuarios.

Ambas plataformas comparten la **autenticación unificada**: el usuario se registra una vez y accede a Moodle y WordPress con las mismas credenciales.

## Monitorización

El módulo `server-status` de Apache está habilitado pero con el acceso restringido a una subred de confianza (no es accesible desde cualquier IP). Permite ver en tiempo real el estado de los servicios, las conexiones activas y la carga del sistema.

## Tareas automatizadas (Crontab)

| Tarea | Frecuencia | Descripción |
| :--- | :--- | :--- |
| **Backup de la base de datos** | Diario a las 3:00 AM | `mysqldump` de `areyadb` a `/backup`. |
| **Informe HTML del estado** | Cada minuto | Genera un HTML con el estado de los servicios. |
| **Limpieza de usuarios no confirmados** | Diario | Elimina cuentas pendientes para mantener la integridad. |

## Stack tecnológico

| Categoría | Tecnología |
| :--- | :--- |
| **Sistema operativo** | Debian 12 |
| **Servidor web** | Apache2, PHP, OpenSSL, Suexec |
| **Base de datos** | MariaDB |
| **Correo** | Postfix, Dovecot, Roundcube |
| **Plataformas** | Moodle, WordPress |
| **Scripting** | Perl (CGI, DBI, CGI::Session), Bash |
| **Autenticación** | PAM, validación por email |
| **Virtualización** | VirtualBox |
| **Red** | SSH (puerto 2203), SFTP |
| **Automatización** | Crontab |
| **Monitorización** | Apache server-status |

## Conceptos clave aprendidos

- **Suexec** es clave para la seguridad: cada script corre con los permisos del usuario propietario, no del servidor.
- **La unificación de autenticación** es un problema real de arquitectura: hay que decidir dónde vive la fuente de verdad de los usuarios.
- **Postfix y Dovecot** son dos servicios distintos que hay que coordinar (SMTP para envío, IMAP/POP3 para lectura).
- **Los backups automáticos** no son opcionales: cualquier servicio en producción debe tenerlos desde el día uno.
- **El correo electrónico es un campo minado**: SPF, DKIM, DMARC... configurarlo bien requiere entender todo el ecosistema.

## Posibles mejoras

- Migrar los scripts Perl a Python o Node.js con un framework web moderno.
- Certificados SSL firmados por Let's Encrypt en lugar de autofirmados.
- Añadir fail2ban para protección contra ataques de fuerza bruta.
- Sustituir Roundcube por un cliente de correo más moderno.
- Implementar Docker para hacer los servicios portables.
- Añadir Prometheus + Grafana para monitorización avanzada.
- Configurar Ansible para automatizar todo el despliegue.