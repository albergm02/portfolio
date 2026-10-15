---
title: "Cat Defense"
description: "Videojuego tower defense completo desarrollado en Unity y C#. Incluye build ejecutable para Windows, vídeo demostrativo e informe técnico."
year: 2026
category: "game"
status: "academic"
stack: ["Unity", "C#", ".NET", "Mono", "GitHub Actions"]
featured: false
order: 10
links:
  repo: "https://github.com/albergm02/cat_defense"
highlights:
  - "Juego completo con build ejecutable para Windows (CatDeffense.exe)."
  - "Sistema de oleadas, colocación estratégica de torres y enemigos con rutas dinámicas."
  - "Pipeline de CI configurado con GitHub Actions para compilación automática."
  - "Documentación técnica formal (informe PDF) y vídeo demostrativo incluidos."
---

## El proyecto

Cat Defense es un **videojuego tower defense** desarrollado íntegramente en **Unity** con scripts en **C#**. El objetivo es defender una base de las oleadas de enemigos colocando torres estratégicamente a lo largo del mapa.

## Mecánicas principales

- **Sistema de oleadas** con dificultad progresiva: cada oleada es más numerosa y los enemigos tienen más resistencia.
- **Enemigos con rutas dinámicas**: siguen waypoints predefinidos, lo que obliga al jugador a planificar la colocación de torres.
- **Economía de recursos**: los enemigos eliminados otorgan recursos que se invierten en colocar o mejorar torres.
- **Colocación estratégica**: cada torre tiene un coste, un alcance y una cadencia de disparo distintos, lo que crea decisiones tácticas.

## Entregables

El proyecto se completó con:

- **Build jugable** para Windows (`.exe` incluido en el repositorio).
- **Vídeo demostrativo** (`CatDeffense_Video.mp4`).
- **Informe técnico** (`Informe _CatDeffense.pdf`) con la documentación del diseño y desarrollo.
- **CI con GitHub Actions** para compilación automática del proyecto.

## Nota

El código fuente completo está disponible en el repositorio, pero el proyecto se distribuye principalmente como build ejecutable.