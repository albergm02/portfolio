---
title: "SQLPlus & MongoDB"
description: "Ejercicios comparativos de bases de datos relacionales (Oracle SQL*Plus) y NoSQL (MongoDB) sobre un mismo modelo: una red de bibliotecas."
year: 2025
category: "data"
status: "academic"
stack: ["Oracle SQL*Plus", "MongoDB", "SQL", "PL/SQL", "NoSQL", "Aggregation Pipeline"]
featured: false
order: 13
links:
  repo: "https://github.com/albergm02/SQLPlus-MongoDB"
highlights:
  - "Modelo lógico de una red de bibliotecas implementado en dos paradigmas distintos."
  - "Cursores, transacciones, triggers y PL/SQL en Oracle SQL*Plus."
  - "Consultas, agregaciones y pipelines en MongoDB para el mismo modelo de datos."
  - "Comparativa práctica entre modelado relacional y modelado documental."
---

## El proyecto

Ejercicios prácticos que implementan **el mismo modelo de datos** (una red de bibliotecas con libros, autores, sucursales y préstamos) en dos sistemas muy distintos: **Oracle** (relacional) y **MongoDB** (documental).

El objetivo era entender las diferencias reales entre ambos paradigmas, no solo en la sintaxis, sino en la forma de modelar y en las decisiones de diseño. Cada ejercicio se resuelve en ambos sistemas, lo que permite ver de un vistazo **cómo cambia el código, el modelado y las decisiones técnicas** según el paradigma elegido.

## Modelo de datos

Los ejercicios se basan en el modelo lógico de una **red de bibliotecas** (esquema `univ`), que incluye:

- **LIBRO**: libros con ISBN, título, año de edición y editorial.
- **AUTOR**: autores con código, nombre, año de nacimiento y fallecimiento.
- **NACIONALIDAD**: nacionalidades de los autores.
- **EDITORIAL**: editoriales que publican libros.
- **ESCRIBE**: relación N:M entre autores y libros.
- **SUCURSAL**: sucursales de la red de bibliotecas.
- **DISPONE**: ejemplares disponibles por sucursal.
- **LECTOR**: usuarios registrados.
- **PRESTAMO**: registro de préstamos activos e históricos.

## Comparativas SQL vs NoSQL

Esta es la parte más interesante del proyecto: **el mismo caso de uso, dos implementaciones**.

### Insertar un libro

En **Oracle SQL*Plus**, se usa una sentencia `INSERT INTO` con todos los campos obligatorios, y la base de datos valida automáticamente los tipos y la integridad referencial de la editorial. Si mañana quieres añadir un campo nuevo, hay que hacer `ALTER TABLE`.

En **MongoDB**, se inserta un documento con `insertOne` que puede anidar la editorial completa dentro del libro, además de incluir campos adicionales como `generos`. El esquema es flexible: cada documento puede tener campos distintos sin tocar nada. La contrapartida es que la integridad hay que garantizarla manualmente desde la aplicación.

### Consultar préstamos activos

En **Oracle**, requiere unir cuatro tablas (`PRESTAMO`, `LECTOR`, `DISPONE` y `LIBRO`) mediante `JOIN` para reconstruir la información completa, filtrando por `Fecha_Devolucion IS NULL` y ordenando por fecha descendente.

En **MongoDB**, basta con una consulta a la colección `prestamos` filtrando por `fecha_devolucion: null`, con una proyección que devuelve solo los campos necesarios. **No hay JOINs** porque la información ya viene anidada en el documento desde su inserción.

### Contar cuántos libros ha escrito cada autor

En **Oracle**, se resuelve con un `GROUP BY` sobre la tabla `ESCRIBE` unida a `AUTOR`, aplicando `COUNT(*)` por autor.

En **MongoDB**, se usa un pipeline de agregación con `$lookup` (equivalente a un JOIN), seguido de un `$project` con `$size` para contar los libros anidados, y finalmente un `$sort` por el total.

## Conceptos trabajados

### En Oracle SQL*Plus

- **Cursores explícitos e implícitos** para procesar resultados fila a fila.
- **Transacciones** con `COMMIT`, `ROLLBACK` y `SAVEPOINT`.
- **Triggers** para validar reglas de negocio e integridad referencial.
- **PL/SQL**: bloques anónimos, procedimientos y funciones.
- **Vistas y sinónimos** para simplificar consultas complejas.
- **Índices** para optimizar el rendimiento de consultas frecuentes.

### En MongoDB

- **Consultas con filtros** (`find`, `findOne`) y proyecciones.
- **Pipeline de agregación** (`$match`, `$group`, `$lookup`, `$sort`).
- **Documentos embebidos vs referencias** entre colecciones.
- **Índices** con `createIndex` y análisis con `explain()`.
- **Bulk operations** para inserciones masivas eficientes.

## Conclusiones

Después de trabajar el mismo modelo en ambos paradigmas, la conclusión es clara: **no hay un paradigma mejor, sino uno más adecuado según el caso de uso**.

| Criterio | Oracle (SQL) | MongoDB (NoSQL) |
| :--- | :--- | :--- |
| **Integridad de datos** | Constraints, FK, triggers | Hay que garantizarla manualmente |
| **Consultas complejas** | JOINs potentes | Aggregation pipeline más expresivo |
| **Velocidad de lectura** | Requiere JOINs | Documentos anidados sin JOINs |
| **Flexibilidad del esquema** | Rígido | Esquema dinámico |
| **Transacciones ACID** | Robustas y maduras | Mejoradas desde v4.0 |
| **Escalabilidad horizontal** | Compleja (sharding) | Nativa (replica sets, sharding) |
| **Madurez del ecosistema** | Más de 40 años de herramientas | Moderno y muy activo |

**Lecciones clave:**

- El modelado en NoSQL requiere pensar en las consultas **antes** de diseñar las colecciones. En SQL, el modelo se normaliza primero y las consultas se adaptan después.
- **Anidar vs referenciar** en MongoDB es el equivalente a **normalizar vs desnormalizar** en SQL. La decisión depende del patrón de lectura.
- Los **triggers de Oracle** son potentes pero complejos de depurar. En MongoDB, la lógica suele vivir en la aplicación o en *change streams*.
- **Ambos sistemas son necesarios** en un stack moderno: SQL para transacciones críticas, NoSQL para datos cambiantes y lecturas rápidas.

## Stack tecnológico

| Categoría | Tecnología |
| :--- | :--- |
| **Base de datos relacional** | Oracle Database 19c |
| **Cliente SQL** | SQL*Plus |
| **Lenguajes SQL** | SQL · PL/SQL |
| **Base de datos NoSQL** | MongoDB 7.x |
| **Cliente NoSQL** | mongosh · MongoDB Compass |
| **Consultas NoSQL** | JavaScript (BSON) · Aggregation Pipeline |
| **Acceso remoto** | SSH |
| **Sistema** | Debian/Linux (servidor olivo.usal.es) |