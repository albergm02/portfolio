---
title: "Bully Algorithm"
description: "Implementación distribuida del algoritmo Bully para elección de líder, con servicios REST en Java, despliegue sobre Apache Tomcat y un gestor remoto de procesos."
year: 2025
category: "systems"
status: "academic"
stack: ["Java", "JAX-RS", "Apache Tomcat", "REST", "Multithreading", "Bash", "Maven"]
featured: false
order: 12
highlights:
  - "Algoritmo Bully completo: elección de líder, mensajes OK y coordinador, manejo de fallos."
  - "Servicios REST en Java con JAX-RS desplegados sobre Apache Tomcat."
  - "Sistema multihilo donde cada proceso corre en su propio hilo con estado independiente."
  - "Gestor remoto de procesos (arrancar/parar/consultar) vía HTTP y scripts Bash."
  - "Simulación distribuida sobre 3 máquinas virtuales con 6 procesos en total."
---

## El proyecto

Implementación completa del **algoritmo Bully** para elección de líder en un sistema distribuido. Cada proceso corre como un hilo independiente dentro de una aplicación Java desplegada en **Apache Tomcat**, y se comunican entre sí mediante **servicios REST** construidos con **JAX-RS**.

## Arquitectura

El sistema está formado por tres componentes principales:

### `Proceso.java` — el nodo distribuido

Cada proceso extiende `Thread` y mantiene su propio estado: identificador, coordinador actual, estado de elección y un flag de activo/parado. Implementa el algoritmo Bully al pie de la letra:

- **Elección activa**: un proceso inicia una elección enviando mensajes a todos los procesos con ID superior.
- **Mensajes OK**: los procesos superiores responden confirmando que están vivos.
- **Coordinador**: el proceso con el ID más alto que no reciba respuesta se declara nuevo líder y notifica a los demás.

El proceso incluye un mecanismo de **sincronización con `wait/notify`** para permitir parar y arrancar hilos en caliente, sin destruirlos.

### `Servicio.java` — la capa REST

Una clase `@Singleton` que expone los endpoints REST del sistema bajo el path `/Proceso`. Se despliega sobre **Apache Tomcat** y actúa como fachada entre el mundo HTTP y los procesos internos. Endpoints principales:

- `POST /{id}/eleccion` — lanza una elección desde el proceso indicado.
- `GET /{id}/ok` — responde con el estado de un proceso (para el protocolo Bully).
- `POST /{id}/coordinador` — informa a un proceso de quién es el nuevo coordinador.
- `GET /{id}/computar` — simula carga de trabajo (espera entre 100-300ms).
- `GET /{id}/parar` y `GET /{id}/arrancar` — control remoto del ciclo de vida del proceso.
- `GET /estado` — devuelve el estado de todos los procesos del nodo.

### `Gestor.java` — la consola de administración

Cliente de consola que consume los servicios REST para administrar el sistema en caliente. Permite:

- **Consultar el estado** de todos los procesos distribuidos.
- **Parar un proceso** por su ID (simula una caída de nodo).
- **Arrancar un proceso** que estaba parado.

El gestor itera sobre las IPs únicas del sistema, consulta cada nodo y unifica la respuesta en una vista de consola.

## Simulación y despliegue

El sistema se despliega sobre **tres máquinas virtuales** que alojan seis procesos en total. Los scripts Bash facilitan el despliegue:

- `lanzarProcesos.sh` — despliega el `.war` vía `scp` y arranca los procesos con el offset correspondiente.
- `gestor.sh` — despliega y ejecuta el gestor localmente.
- `shareKeys.sh` — configura las claves SSH para automatizar el despliegue sin contraseña.

La comunicación entre procesos se realiza sobre **HTTP**, lo que permite que el sistema sea **realmente distribuido**: los procesos pueden vivir en máquinas distintas y el algoritmo funciona igual.

## Desafíos técnicos

- **Concurrencia real**: cada proceso es un hilo con su propio ciclo de vida y estado. Coordinar `wait/notify`, evitar condiciones de carrera y manejar interrupciones fue la parte más delicada.
- **Timeouts y tolerancia a fallos**: si un proceso no responde en un segundo, se asume caído. Esto obliga a manejar excepciones de red y decidir cuándo reintentar y cuándo declarar al proceso como inactivo.
- **Despliegue distribuido**: automatizar el envío del `.war` a cada máquina, extraerlo y arrancar el proceso correcto con el offset adecuado requirió scripting con SSH.

## Nota

El repositorio es **privado por motivos académicos y legales**, por lo que no hay enlace público disponible.