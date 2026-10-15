---
title: "F1 Fantasy"
description: "Plataforma web progresiva tipo Fantasy para el campeonato de Fórmula 1, con puntuación automática basada en la API OpenF1 y un mercado transaccional entre jugadores."
year: 2026
category: "web"
status: "deployed"
stack: ["Vue 3", "Pinia", "Firebase", "Tailwind CSS", "PrimeVue", "Vite PWA", "Vitest", "Zod", "Cloud Functions"]
featured: true
order: 1
links:
  repo: "https://github.com/albergm02/Formula1_Fantasy"
  demo: "https://formula1-fantasy-ba348.web.app/"
highlights:
  - "PWA completa desplegada en producción, con gestión de ligas privadas y equipos virtuales."
  - "Sistema de puntuación automático sincronizado con datos reales de cada Gran Premio."
  - "Mercado transaccional con pujas diarias, cierre automático y cláusulas sobre rivales."
  - "Arquitectura BaaS multi-tenant sobre Firebase (Firestore, Cloud Functions, Auth, App Check)."
  - "TFG calificado con 8.5 y estimación de 656 horas (UCP) con planificación UML completa."
---

## El proyecto

F1 Fantasy es una **Progressive Web App** que permite a grupos de amigos crear ligas privadas y competir entre ellos construyendo equipos virtuales con pilotos, coches y potenciadores reales del Mundial de Fórmula 1.

La aplicación se apoya en la API **OpenF1** para obtener datos reales de cada sesión del campeonato, y traduce los resultados de la pista en puntuaciones para cada equipo virtual.

## Características principales

### Ligas privadas

- Crea ligas con un nombre y código de invitación único.
- Gestiona participantes, roles y permisos.
- Cada liga tiene su propia clasificación y reglas configurables.

### Garaje virtual

- Cada jugador construye su equipo fichando pilotos, coches y potenciadores.
- Los activos se representan con cartas personalizadas diseñadas específicamente para el proyecto.
- Cada activo tiene un valor de mercado que fluctúa según el rendimiento real en pista.

### Puntuación automática

- Sincronización con la API OpenF1 tras cada sesión (libres, clasificación, sprint y carrera).
- Reglas de puntuación diferenciadas por tipo de sesión.
- Cálculo automático con Cloud Functions y actualización en Firestore.

### Mercado transaccional

- Pujas diarias por activos de otros jugadores.
- Cierre automático de pujas con adjudicación al mejor postor.
- Ejecución de cláusulas sobre activos rivales pagando su valor.
- Protección de cartas para evitar cláusulas durante un tiempo limitado.

### Panel de administración

- Moderación de usuarios y ligas.
- Gestión de incidencias y resolución de disputas.
- Métricas de uso y estado del sistema.

### Experiencia PWA

- Instalable en móvil y escritorio.
- Funciona offline con datos cacheados.

## Arquitectura

El proyecto sigue una arquitectura **BaaS multi-tenant** sobre Firebase, con separación clara entre frontend y backend serverless.

- **Frontend (PWA)**: Vue 3, Pinia para estado global, PrimeVue como kit de UI, Tailwind CSS para estilos, Vite PWA para la transformación a aplicación instalable.
- **Backend (Firebase)**: Authentication para login, Firestore como base de datos NoSQL en tiempo real, Cloud Functions para la lógica de negocio, App Check como protección contra abuso, y Hosting para el despliegue del frontend.
- **Datos externos**: API OpenF1 (REST) como fuente de datos reales del campeonato.
- **Automatización**: Google Cloud Scheduler dispara las Cloud Functions de puntuación tras cada sesión del GP.

### Decisiones técnicas clave

- **BaaS multi-tenant**: una sola instancia de Firestore alberga todas las ligas, aisladas por `ligaId` y reglas de seguridad.
- **Cloud Functions programadas**: tras cada sesión, un job programado recoge los datos de OpenF1, calcula las puntuaciones y actualiza los equipos.
- **Firestore desnormalizado**: los documentos están optimizados para lectura rápida, sacrificando normalización por rendimiento.
- **Validación con Zod**: los formularios y las respuestas de la API se validan con esquemas tipados.

## Desafíos técnicos

El mayor reto del proyecto fue **diseñar el sistema de puntuación automática**. Cada Gran Premio tiene múltiples sesiones (libres, clasificación, sprint, carrera) con reglas de puntuación distintas. La solución fue una Cloud Function programada con Google Cloud Scheduler que, tras cada sesión, recoge los datos de OpenF1, calcula las puntuaciones aplicando las reglas del reglamento y actualiza todos los equipos en Firestore.

El **mercado transaccional** fue el segundo gran desafío: hay que garantizar que dos usuarios no puedan pujar por el mismo activo con condiciones contradictorias. Se resolvió con transacciones de Firestore y validación del lado servidor.

## Contexto académico

| Campo | Valor |
| :--- | :--- |
| **Título** | Diseño de una liga virtual de Fórmula 1 basada en un sistema de gestión y puntuación automática |
| **Autor** | Alberto García Martín |
| **Titulación** | Grado en Ingeniería Informática |
| **Universidad** | Universidad de Salamanca (USAL) |
| **Curso** | 2025-2026 |
| **Calificación** | 8.5 — Notable |
| **Tutores** | David Cruz García · Gabriel Villarrubia González |