---
title: "F1 Fantasy"
description: "Plataforma web progresiva tipo Fantasy para el campeonato de Fórmula 1, con puntuación automática basada en la API OpenF1 y un mercado transaccional entre jugadores."
year: 2026
category: "web"
status: "deployed"
stack: ["Vue 3", "Pinia", "Firebase", "Tailwind CSS", "PrimeVue", "Vite PWA", "Vitest"]
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

## Desafíos técnicos

El mayor reto del proyecto fue **diseñar el sistema de puntuación automática**. Cada Gran Premio tiene múltiples sesiones (libres, clasificación, sprint, carrera) con reglas de puntuación distintas. La solución fue un **Cloud Function programada** con Google Cloud Scheduler que, tras cada sesión, recoge los datos de OpenF1, calcula las puntuaciones aplicando las reglas del reglamento y actualiza todos los equipos en Firestore.

El **mercado transaccional** fue el segundo gran desafío: hay que garantizar que dos usuarios no puedan pujar por el mismo activo con condiciones contradictorias. Se resolvió con transacciones de Firestore y validación del lado servidor.