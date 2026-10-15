---
title: "El Pactómetro"
description: "Aplicación de escritorio para visualizar, comparar y simular procesos electorales en España, incluyendo un simulador de coaliciones basado en escaños reales."
year: 2025
category: "desktop"
status: "academic"
stack: ["C#", ".NET", "WPF", "XAML", "MVC"]
featured: true
order: 2
links:
  repo: "https://github.com/albergm02/ElPactometro"
highlights:
  - "Aplicación de escritorio completa con múltiples ventanas interconectadas."
  - "Gráficos de barras con comparativa histórica entre elecciones."
  - "Simulador de pactómetros para calcular coaliciones con escaños reales."
  - "Arquitectura MVC con PropertyChanged para binding bidireccional."
---

## El proyecto

El Pactómetro es una herramienta de análisis político que permite visualizar los resultados de las elecciones generales en España, comparar distintas convocatorias y **simular posibles coaliciones** entre partidos en base a sus escaños.

## Interfaz y arquitectura

La aplicación usa **WPF con XAML** para la interfaz, siguiendo el patrón **MVC** para separar la lógica de negocio de la presentación. El binding bidireccional se gestiona con `INotifyPropertyChanged`, lo que permite que cualquier cambio en el modelo se refleje automáticamente en la vista.

El **modo pactómetro** es la característica estrella: el usuario selecciona partidos y la app calcula automáticamente si suman mayoría absoluta, mostrando visualmente el umbral de 176 escaños.