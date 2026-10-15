---
title: "ThePerchRoute"
description: "Simulación del problema de los filósofos comensales y otros problemas clásicos de concurrencia en C++ con hilos, mutex y semáforos."
year: 2024
category: "systems"
status: "academic"
stack: ["C++", "std::thread", "std::mutex", "Semáforos", "CMake"]
featured: false
order: 14
links:
  repo: "https://github.com/albergm02/ThePerchRoute"
highlights:
  - "Implementación del problema de los filósofos comensales con distintas estrategias."
  - "Uso de hilos, mutex, semáforos y variables de condición."
  - "Prevención de deadlocks y starvation mediante asimetría y arbitraje."
---

## El proyecto

Simulación en **C++** de varios problemas clásicos de concurrencia, con foco especial en el **problema de los filósofos comensales**.

## Problemas implementados

- **Filósofos comensales**: cinco filósofos que alternan entre pensar y comer, compitiendo por tenedores compartidos.
- **Productor-consumidor**: buffer circular sincronizado con semáforos.
- **Lectores-escritores**: acceso concurrente a un recurso compartido con prioridad configurable.

## Estrategias de sincronización

Se implementaron varias soluciones al problema de los filósofos, desde la ingenua (que provoca deadlock) hasta las que garantizan progreso mediante:
- **Asimetría** en el orden de adquisición de recursos.
- **Arbitraje** con un semáforo adicional.
- **Estado del filósofo** con variables de condición.

El proyecto deja claro por qué la sincronización es uno de los temas más delicados de la programación concurrente.