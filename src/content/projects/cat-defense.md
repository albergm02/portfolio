---
title: "Cat Defense"
description: "Videojuego tipo tower defense desarrollado en Unity y C#, con sistema de oleadas, colocación estratégica de torres y build ejecutable para Windows."
year: 2024
category: "game"
status: "academic"
stack: ["Unity", "C#", ".NET", "Mono", "GitHub Actions"]
featured: false
order: 10
links:
  repo: "https://github.com/albergm02/cat_defense"
highlights:
  - "Desarrollo completo de un videojuego 3D con Unity y C#."
  - "Sistema de oleadas con dificultad progresiva y enemigos con rutas dinámicas."
  - "Mecánicas de colocación de torres, gestión de recursos y balanceo."
  - "Build ejecutable para Windows y CI configurado con GitHub Actions."
---

## El proyecto

Cat Defense es un **videojuego tipo tower defense** desarrollado íntegramente en **Unity** con scripts en **C#**. El jugador debe defender una base del avance de oleadas enemigas, colocando y mejorando torres estratégicamente a lo largo del mapa.

El proyecto se completó con una **build ejecutable para Windows**, un **vídeo demostrativo** y un **informe técnico** con la documentación del diseño y desarrollo. Fue un proyecto académico en el que se aplicaron conceptos de programación orientada a objetos, IA básica de enemigos y diseño de mecánicas de juego.

## Características

- **Sistema de oleadas con dificultad progresiva**: cada oleada es más numerosa y los enemigos tienen más resistencia.
- **Enemigos con rutas dinámicas**: siguen waypoints predefinidos, obligando al jugador a planificar la colocación de torres.
- **Economía de recursos**: los enemigos eliminados otorgan recursos que se invierten en colocar o mejorar torres.
- **Colocación estratégica**: cada torre tiene un coste, un alcance y una cadencia de disparo distintos, lo que crea decisiones tácticas.
- **Interfaz de juego completa**: HUD, menú principal, pantalla de victoria/derrota y sistema de pausa.
- **CI configurado**: compilación automática con GitHub Actions.

## Mecánicas principales

### Sistema de oleadas

Los enemigos aparecen en grupos (oleadas) con intervalos regulares. Cada oleada es más difícil que la anterior: más enemigos, más vida por enemigo, y a veces nuevos tipos de enemigo con comportamientos distintos. El jugador debe gestionar los recursos acumulados para reforzar sus defensas antes de la siguiente oleada.

### Enemigos y waypoints

Los enemigos siguen una ruta predefinida mediante **waypoints**: puntos de control que marcan el camino desde el punto de aparición hasta la base. Esto obliga al jugador a colocar torres en posiciones estratégicas para maximizar el daño antes de que los enemigos lleguen a la base.

### Economía y torres

El sistema de recursos es el motor de las decisiones tácticas: cada enemigo eliminado aporta una cantidad de recursos que se acumulan en un contador global. El jugador puede gastar esos recursos en:

- Colocar nuevas torres en posiciones vacías.
- Mejorar torres existentes para aumentar su daño o alcance.

Cada tipo de torre tiene un balance distinto: unas son más baratas pero hacen menos daño, otras son caras pero tienen mayor alcance o cadencia de disparo.

### Interfaz de usuario

El HUD muestra en tiempo real:

- Recursos disponibles.
- Oleada actual y siguiente.
- Vida de la base.
- Torres seleccionadas y su estado.

El menú principal permite iniciar partida, ajustar opciones y salir. Existe también una pantalla de victoria/derrota al final de la partida.

## Cómo jugar

### Opción 1 — Descargar la build (recomendado)

1. Ve a la carpeta `Game/` en el repositorio.
2. Descarga el archivo `CatDeffense.exe` junto con la carpeta `CatDeffense_Data` y el archivo `UnityPlayer.dll`.
3. Ejecuta `CatDeffense.exe`.

Es importante descargar los tres elementos juntos, porque Unity no empaqueta todo en un único ejecutable. Windows puede mostrar un aviso de SmartScreen al tratarse de un ejecutable sin firma digital: hay que pulsar "Más información" y luego "Ejecutar de todas formas".

### Opción 2 — Abrir el proyecto en Unity

1. Clona el repositorio: `git clone https://github.com/albergm02/cat_defense.git`
2. Abre la carpeta `CatDeffense/` desde **Unity Hub**.
3. Usa **Unity 2022.3 LTS** o superior.
4. Abre la escena principal y pulsa *Play*.

## Controles

| Acción | Tecla |
| :--- | :--- |
| Seleccionar torre | `1`, `2`, `3` |
| Colocar torre | Clic izquierdo |
| Cancelar colocación | Clic derecho |
| Iniciar oleada | `Espacio` |
| Pausa | `Esc` |

## Entregables

El proyecto se completó con:

- **Build jugable** para Windows (`.exe` incluido en el repositorio).
- **Vídeo demostrativo** (`CatDeffense_Video.mp4`).
- **Informe técnico** (`Informe _CatDeffense.pdf`) con la documentación del diseño y desarrollo.
- **CI con GitHub Actions** para compilación automática del proyecto.

## Stack tecnológico

| Categoría | Tecnología |
| :--- | :--- |
| **Motor** | Unity 2022.3 LTS |
| **Lenguaje** | C# (.NET) |
| **Runtime** | Mono (Unity) |
| **Build target** | Windows x86_64 |
| **CI/CD** | GitHub Actions |
| **Control de versiones** | Git · GitHub |

## Conceptos clave aprendidos

- **Unity es un motor increíblemente flexible**, pero requiere entender su ciclo de vida (Awake, Start, Update, FixedUpdate) para no cometer errores de rendimiento.
- **El sistema de waypoints** es una técnica sencilla pero eficaz para dar rutas a enemigos en un tower defense: cada enemigo avanza por una lista de puntos y se orienta hacia el siguiente.
- **El balanceo de un juego es una ciencia aparte**: ajustar costes, daños, vida y velocidades para que el juego sea divertido y desafiante es tan importante como el código.
- **Empaquetar un juego de Unity** para Windows no es simplemente exportar el `.exe`: hay que distribuir también la carpeta `_Data` y las DLLs del motor.
- **Un buen HUD** comunica información crítica sin saturar la pantalla. Menos es más.

## Posibles mejoras

- Añadir más tipos de torres con habilidades especiales (ralentización, daño en área).
- Implementar modo infinito con ranking local.
- Port a **WebGL** para poder jugar directamente en el navegador sin descargar nada.
- Sistema de logros y desbloqueables.
- Optimización para dispositivos móviles (Android/iOS).
- Menús de opciones con control de volumen y dificultad.
- Guardado de progreso entre sesiones.