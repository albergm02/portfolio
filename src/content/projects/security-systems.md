---
title: "Security Systems"
description: "Colección de prácticas de ciberseguridad: criptografía simétrica y asimétrica, TLS/HTTPS, hardening de sistemas operativos y análisis de red."
year: 2025
category: "security"
status: "academic"
stack: ["OpenSSL", "GnuPG", "iptables", "Apache2", "TLS", "RSA", "AES", "SHA256"]
featured: false
order: 11
links:
  repo: "https://github.com/albergm02/Security-Systems"
highlights:
  - "Implementación de cifrado simétrico (AES) y asimétrico (RSA, ECC) desde cero."
  - "Servidor HTTPS con CA propia, certificados firmados y verificación de cadena."
  - "Reglas de cortafuegos con iptables y simulación de ataques DoS."
  - "Análisis de tráfico y captura de paquetes para auditoría."
---

## El proyecto

Security Systems reúne una serie de **prácticas de ciberseguridad** que cubren desde criptografía aplicada hasta endurecimiento de sistemas y análisis de red.

## Contenidos

- **Criptografía simétrica**: cifrado y descifrado con AES y otros algoritmos.
- **Criptografía asimétrica**: generación de claves RSA y ECC, firma digital, intercambio de claves.
- **HTTPS con CA propia**: creación de una Autoridad Certificadora, emisión de certificados y configuración de Apache2 con TLS.
- **Hardening de sistemas**: políticas de contraseñas, permisos, eliminación de servicios innecesarios.
- **Cortafuegos**: reglas de filtrado con iptables para bloquear puertos y protocolos.
- **Análisis de red**: captura y análisis de tráfico para detectar anomalías.