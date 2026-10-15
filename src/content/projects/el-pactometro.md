---
title: "El Pactómetro"
description: "Aplicación de escritorio para visualizar, comparar y simular procesos electorales en España, incluyendo un simulador de coaliciones basado en escaños reales."
year: 2025
category: "desktop"
status: "academic"
stack: ["C#", ".NET", "WPF", "XAML", "MVC", "XML"]
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

La aplicación usa **WPF con XAML** para la interfaz, siguiendo el patrón **MVC** para separar la lógica de negocio de la presentación. El binding bidireccional se gestiona con `INotifyPropertyChanged`, lo que permite que cualquier cambio en el modelo se refleje automáticamente en la vista.

El **modo pactómetro** es la característica estrella: el usuario selecciona partidos y la app calcula automáticamente si suman mayoría absoluta, mostrando visualmente el umbral de 176 escaños.

## Características

- **Visualización de resultados electorales** mediante gráficos de barras dinámicos.
- **Gestión manual** de procesos electorales y partidos políticos.
- **Modo comparativo**: compara gráficamente resultados de varias elecciones a lo largo del tiempo.
- **Modo pactómetro**: selecciona partidos y comprueba si suman mayoría absoluta.
- **Interfaz multi-ventana**: ventanas interconectadas que se comunican entre sí.
- **Carga de datos desde XML**: procesos predefinidos leídos desde un archivo de solo lectura.
- **Estilos personalizables**: sistema de reskin de colores y recursos visuales.

## Estructura de la aplicación

### Ventanas principales

| Ventana | Función |
| :--- | :--- |
| **Gráficos** | Muestra los gráficos de barras de los resultados electorales del proceso seleccionado. |
| **Tablas** | Lista todos los procesos electorales y los partidos asociados. Actúa como controlador principal. |

### Ventanas adicionales

| Ventana | Función |
| :--- | :--- |
| **Añadir partido** | Permite añadir manualmente un nuevo partido político a un proceso. |
| **Añadir proceso** | Permite crear manualmente un nuevo proceso electoral. |
| **Modo comparativo** | Compara gráficamente varios procesos electorales a la vez. |
| **Modo pactómetro** | Permite seleccionar partidos y simular coaliciones con mayoría absoluta. |

## Arquitectura

El proyecto sigue el patrón **Modelo-Vista-Controlador (MVC)** aplicado a WPF:

- **Modelos**: `Proceso` y `Partido` representan los datos.
- **Vistas**: archivos `.xaml` que definen la interfaz.
- **Controlador**: la ventana `Tablas` actúa como mediadora entre la entrada del usuario y la actualización del gráfico.

### Componentes principales

**`Proceso`** representa una convocatoria electoral con:
- Tipo (generales o autonómicas).
- Fecha de celebración.
- Lista de partidos participantes.
- Escaños totales y escaños necesarios para la mayoría absoluta.
- Soporte de importación desde XML y actualización dinámica de escaños.

**`Partido`** representa un partido político con:
- Nombre y escaños obtenidos.
- Barra gráfica asociada con tooltip, color y etiqueta.
- Actualización reactiva ante cambios de datos o de UI.

### Manejo de eventos

- Los eventos siguen la convención `OnXxxx`.
- Se usa `INotifyPropertyChanged` para actualizar la UI automáticamente cuando cambian los datos.
- Los eventos disparan interacciones entre ventanas (por ejemplo, añadir un proceso actualiza los gráficos en tiempo real).

### Ejemplos de interacción

- **Añadir un proceso** → los gráficos se actualizan en tiempo real.
- **Seleccionar partidos en modo pactómetro** → las métricas de coalición se recalculan dinámicamente.
- **Modo comparativo** → filtra procesos y actualiza el gráfico comparativo.

## Tipos de gráficos

| Tipo | Descripción |
| :--- | :--- |
| **Gráfico principal** | Muestra los resultados de un único proceso electoral seleccionado. |
| **Gráfico comparativo** | Muestra varios procesos en paralelo, uno junto a otro. |
| **Gráfico pactómetro** | Simula coaliciones y muestra si alcanzan la mayoría absoluta (176 escaños). |

El renderizado se hace mediante `StackPanel` y barras generadas dinámicamente a partir de los datos de cada partido.

## Cómo ejecutar

### Requisitos

- **Windows 10/11**.
- **.NET Framework 4.7.2 o superior** (o .NET 6+ si el proyecto se ha migrado).
- **Visual Studio 2022** (para desarrollo) o **Visual Studio Community** (gratuito).

### Opción 1 — Abrir el proyecto

1. Clona el repositorio: `git clone https://github.com/albergm02/ElPactometro.git`
2. Abre el archivo `.sln` con Visual Studio.
3. Restaura los paquetes NuGet si es necesario.
4. Compila y ejecuta con `F5`.

### Opción 2 — Build ejecutable

1. Ejecuta `ElPactometro.exe` desde la carpeta `bin/Release/`.
2. La aplicación leerá el archivo `datos.xml` incluido.

## Stack tecnológico

| Categoría | Tecnología |
| :--- | :--- |
| **Framework** | WPF (Windows Presentation Foundation) |
| **Lenguaje** | C# |
| **UI** | XAML |
| **Persistencia** | XML (solo lectura) |
| **Arquitectura** | MVC · Binding bidireccional con `PropertyChanged` |
| **IDE** | Visual Studio 2022 |
| **Control de versiones** | Git · GitHub |

## Conceptos clave aprendidos

- **WPF y XAML** permiten construir interfaces ricas con muy poco código, pero requieren entender el sistema de binding y recursos.
- **`INotifyPropertyChanged`** es la pieza central del binding bidireccional en WPF: sin él, los cambios en el modelo no llegan a la vista.
- **El patrón MVC aplicado a WPF** ayuda a separar responsabilidades, aunque WPF invita naturalmente al patrón MVVM (que es su evolución natural).
- **Los gráficos dinámicos** requieren pensar en el rendimiento: cada barra es un control WPF y conviene minimizar el número de elementos vivos.
- **Trabajar con datos reales** (escaños, partidos, fechas) obliga a diseñar el modelo pensando en la fuente, no en la UI.

## Posibles mejoras

- Migrar a **.NET MAUI** para soporte multiplataforma.
- Persistencia en base de datos (SQLite) en lugar de XML de solo lectura.
- Añadir exportación de gráficos a imagen y PDF.
- Modo "proyección": simular escenarios hipotéticos con escaños ajustables.
- Histórico de pactos: guardar y comparar simulaciones previas.
- Internacionalización (ES/EN/CA).
- Migrar de MVC a **MVVM** con `CommunityToolkit.Mvvm` para aprovechar todo el potencial de WPF.