---
title: "ThePerchRoute"
description: "Simulación del problema de los filósofos comensales y otros problemas clásicos de concurrencia en C++ con hilos, mutex y semáforos."
year: 2024
category: "systems"
status: "academic"
stack: ["C++", "std::thread", "std::mutex", "Semáforos", "CMake", "Win32", "Lectores-escritores"]
featured: false
order: 14
links:
  repo: "https://github.com/albergm02/ThePerchRoute"
highlights:
  - "Implementación del problema de los filósofos comensales con distintas estrategias."
  - "Uso de hilos, mutex, semáforos y variables de condición."
  - "Prevención de deadlocks y starvation mediante asimetría y arbitraje."
  - "Simulación de otros problemas clásicos: barbero dormilón y lectores-escritores."
---

## El proyecto

Simulación en **C++** de varios problemas clásicos de concurrencia, con foco especial en el **problema de los filósofos comensales**. El objetivo es entender cómo se coordinan múltiples hilos que compiten por recursos compartidos, y por qué la sincronización es uno de los temas más delicados de la programación concurrente.

El proyecto no se limita a resolver un único problema: compara varias estrategias de sincronización para cada uno, mostrando el impacto real de cada decisión sobre el rendimiento, la equidad y la ausencia de bloqueos.

## Problemas implementados

### Filósofos comensales

Cinco filósofos se sientan alrededor de una mesa circular y alternan entre pensar y comer. Para comer necesitan dos tenedores (el de su izquierda y el de su derecha), pero solo hay cinco tenedores en total.

El desafío es implementar soluciones que eviten el **deadlock** (todos cogen el tenedor izquierdo a la vez y esperan eternamente por el derecho), el **starvation** (un filósofo nunca consigue comer) y la **baja concurrencia** (solo uno come aunque haya recursos para más).

### Barbero dormilón

Una barbería tiene un barbero, una silla de corte y un número limitado de sillas de espera. Si no hay clientes, el barbero se duerme. Cuando llega un cliente: si el barbero está dormido lo despierta, si está ocupado y hay sillas libres espera, y si no hay sillas se va.

El reto es coordinar el sueño y despertar del barbero con la llegada variable de clientes.

### Lectores-escritores

Múltiples hilos compiten por un recurso compartido: los lectores pueden acceder simultáneamente, pero los escritores necesitan acceso exclusivo. El problema explora distintas políticas de prioridad (lectores, escritores o equitativa) y su impacto en la latencia.

## Estrategias de sincronización

Se implementaron varias soluciones al problema de los filósofos, desde la ingenua hasta las que garantizan progreso.

| Estrategia | Descripción | Ventajas | Inconvenientes |
| :--- | :--- | :--- | :--- |
| **Ingenua** | Cada filósofo coge el tenedor izquierdo y luego el derecho | Muy simple | Provoca deadlock |
| **Asimetría** | Los pares cogen primero el izquierdo, los impares el derecho | Rompe el ciclo de espera | No garantiza equidad |
| **Arbitraje** | Un semáforo adicional actúa como árbitro (máximo 4 a la mesa) | Sin deadlock, sencillo | Reduce la concurrencia |
| **Estado + variables de condición** | Cada filósofo tiene un estado (pensando, hambriento, comiendo) y solo coge los tenedores si los vecinos no comen | Máxima concurrencia, sin deadlock ni starvation | Más compleja de implementar |

## Cómo ejecutar

### Requisitos

- **Windows 10/11** (usa primitivas Win32 como `CRITICAL_SECTION` y `CreateEvent`).
- **Compilador C++17 o superior**: MSVC, MinGW o g++.
- **CMake 3.15+** (opcional, si se usa el build system).

### Opciones de compilación

Se puede compilar de tres formas:

- **Con g++**: compilación directa con el flag `-std=c++17 -pthread`.
- **Con CMake**: generar la carpeta `build/`, configurar con `cmake ..` y compilar con `cmake --build .`.
- **Con Visual Studio**: abrir el proyecto, compilar con `Ctrl+Shift+B` y ejecutar con `F5`.

## Stack tecnológico

| Categoría | Tecnología |
| :--- | :--- |
| **Lenguaje** | C++17 |
| **Concurrencia estándar** | `std::thread`, `std::mutex`, `std::condition_variable`, `std::counting_semaphore` |
| **Concurrencia Win32** | `CRITICAL_SECTION`, `CreateEvent`, `WaitForSingleObject` |
| **Build** | CMake, g++, MSVC |
| **IDE** | Visual Studio Code / Visual Studio |
| **Sistema** | Windows (primitivas Win32) |

## Conceptos clave aprendidos

- **Deadlock**: cuando dos o más hilos se bloquean mutuamente esperando recursos que el otro retiene. La asimetría rompe el ciclo.
- **Starvation**: cuando un hilo nunca consigue progresar porque los demás se le adelantan siempre. Se evita con colas justas.
- **Variables de condición**: permiten dormir hilos hasta que se cumpla una condición y notificarlos cuando cambie, sin busy-waiting.
- **Semáforos contadores**: ideales para limitar el número de hilos concurrentes en una sección crítica.
- **Diferencia entre mutex y semáforo**: el mutex es binario y propiedad del hilo que lo bloquea; el semáforo puede tener un contador y no tiene dueño.

## Posibles mejoras

- Migrar las primitivas Win32 a **C++20 estándar** (`std::counting_semaphore`, `std::latch`, `std::barrier`).
- Añadir una visualización gráfica con **SFML** para ver a los filósofos comer en tiempo real.
- Instrumentar el código con **métricas**: número de comidas por filósofo, tiempo de espera medio.
- Añadir tests automáticos con **Catch2** o **GoogleTest**.
- Dockerizar el proyecto para que sea reproducible en cualquier sistema operativo.
- Implementar otros problemas clásicos: **fumadores**, **cena con recursos jerárquicos**, **puente de un solo carril**.