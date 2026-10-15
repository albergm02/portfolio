---
title: "Security Systems"
description: "Colección de prácticas de ciberseguridad: criptografía simétrica y asimétrica, TLS/HTTPS, hardening de sistemas operativos y análisis de red."
year: 2025
category: "security"
status: "academic"
stack: ["OpenSSL", "GnuPG", "iptables", "Apache2", "TLS", "RSA", "AES", "SHA256", "ECC"]
featured: false
order: 11
links:
  repo: "https://github.com/albergm02/Security-Systems"
highlights:
  - "Cifrado simétrico (AES) y asimétrico (RSA, ECC) con OpenSSL y GnuPG."
  - "Servidor HTTPS con CA propia, certificados firmados y verificación de cadena."
  - "Reglas de cortafuegos con iptables y simulación de ataques DoS."
  - "Análisis de tráfico y captura de paquetes para auditoría."
---

## El proyecto

Security Systems reúne una colección de **prácticas de ciberseguridad** realizadas durante la Ingeniería Informática. El objetivo no era solo entender la teoría, sino **tocar las herramientas reales** y ver cómo se comportan en escenarios controlados: cifrado, firma digital, HTTPS con CA propia, hardening de sistemas y análisis de red.

## Contenidos

### Criptografía

- **Cifrado simétrico**: DES, AES, RC2 y otros algoritmos.
- **Cifrado asimétrico**: RSA y ElGamal.
- **Gestión de claves**: generación, almacenamiento y distribución segura.
- **Firmas digitales**: creación, verificación y casos de uso.
- **Hashing**: SHA-256 para integridad y verificación.

### Protocolos seguros y HTTPS

- Funcionamiento del **handshake TLS**.
- Creación de una **Autoridad Certificadora propia**.
- Emisión y firma de certificados.
- Configuración de servidores HTTPS con **Apache2**.
- **ECC (Elliptic Curve Cryptography)** para criptografía moderna y ligera.

### Seguridad del sistema operativo

- Gestión de usuarios, grupos y permisos.
- Inspección de **logs** y detección de anomalías.
- **Hardening** de servicios y configuraciones.
- Prácticas de **SSH seguro** y control de privilegios.

### Seguridad de red y cortafuegos

- Análisis de servicios expuestos en la red.
- Configuración de reglas de **iptables**.
- Simulación segura de **ataques DoS** en entorno controlado.
- Protección de redes inalámbricas.

## Ejemplos destacados

### Cifrado simétrico con OpenSSL

Comandos para cifrar y descifrar un archivo con AES-256-CBC y una clave derivada de contraseña.

### Firma digital con GnuPG

Generación de un archivo de firma separado y verificación de la firma contra el archivo original.

### Servidor HTTPS con CA propia

Creación de una Autoridad Certificadora, generación de una CSR para el servidor, firma con la CA y configuración de Apache para usar el certificado.

### Reglas básicas de iptables

Política por defecto de denegación, permitir conexiones establecidas, SSH, HTTP y HTTPS.

## Comparativas técnicas

### Cifrado simétrico vs asimétrico

| Aspecto | Simétrico | Asimétrico |
| :--- | :--- | :--- |
| **Claves** | Una sola (compartida) | Par de claves (pública + privada) |
| **Velocidad** | Muy rápido | Más lento |
| **Uso típico** | Cifrado en tránsito (TLS) | Intercambio de claves, firmas |
| **Algoritmos** | AES, DES, RC2, ChaCha20 | RSA, ECC, ElGamal |
| **Problema principal** | Distribución segura de la clave | Coste computacional |

### RSA vs ECC

| Aspecto | RSA | ECC |
| :--- | :--- | :--- |
| **Tamaño de clave equivalente a 128 bits** | 3072 bits | 256 bits |
| **Velocidad** | Más lento | Más rápido |
| **Uso de recursos** | Alto | Bajo |
| **Adopción moderna** | Legacy, aún común | Estándar en móvil y IoT |

### HTTP vs HTTPS

| Aspecto | HTTP | HTTPS |
| :--- | :--- | :--- |
| **Cifrado** | No | Sí (TLS) |
| **Puerto** | 80 | 443 |
| **Certificado** | No requiere | Requiere CA |
| **Integridad** | No garantizada | Garantizada |

## Stack tecnológico

| Categoría | Herramientas |
| :--- | :--- |
| **Criptografía** | OpenSSL · GnuPG · SHA-256 · AES · RSA · ECC |
| **Servidores** | Apache2 · OpenSSL para TLS |
| **Red y firewall** | iptables · Análisis de puertos |
| **Sistema operativo** | Debian 12 · Permisos y usuarios |
| **Cliente** | Navegador web · DevTools para inspección TLS |
| **Otros** | SSH · Certificados digitales · CA propia |

## Conceptos clave aprendidos

- La criptografía simétrica es rápida pero requiere compartir la clave. Por eso se combina con la asimétrica en TLS.
- El handshake TLS es el momento más delicado de una conexión HTTPS.
- Una CA propia es una herramienta de aprendizaje, no una solución de producción.
- iptables es potente pero peligroso: una regla mal aplicada puede dejarte sin acceso al servidor.
- La seguridad no es solo criptografía: la mayoría de brechas vienen de configuraciones erróneas y errores humanos.