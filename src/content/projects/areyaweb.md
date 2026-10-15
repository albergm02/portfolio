---
title: "AreyaWeb"
description: "Infraestructura completa de administración de sistemas sobre Debian 12: servidor web, servicios de correo, CMS, backups automatizados y monitorización."
year: 2025
category: "systems"
status: "academic"
stack: ["Debian 12", "Apache2", "MariaDB", "Postfix", "Dovecot", "Perl", "Bash"]
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

AreyaWeb es un proyecto integral de **administración de sistemas** que despliega desde cero una infraestructura de servicios sobre Debian 12, simulando un entorno real de empresa.

## Servicios desplegados

- **Servidor web**: Apache2 con PHP, HTTPS con certificados firmados por CA propia.
- **Correo electrónico**: Postfix + Dovecot + Roundcube, con autenticación y antispam.
- **Base de datos**: MariaDB para los datos de la aplicación y Moodle.
- **CMS y plataformas**: Moodle (educación), WordPress (blogs).
- **Backups**: scripts en Bash programados con crontab.

## Scripts CGI en Perl

Una de las partes más formativas fue implementar la **autenticación de usuarios** mediante scripts CGI en Perl. Se usó el módulo `DBI` para conectar con MariaDB, `CGI::Session` para la gestión de sesiones y verificación por email para activar las cuentas.