---
title: "SQLPlus & MongoDB"
description: "Ejercicios comparativos de bases de datos relacionales (Oracle SQL*Plus) y NoSQL (MongoDB) sobre un mismo modelo: una red de bibliotecas."
year: 2024
category: "data"
status: "academic"
stack: ["Oracle SQL*Plus", "MongoDB", "SQL", "PL/SQL", "NoSQL"]
featured: false
order: 13
links:
  repo: "https://github.com/albergm02/SQLPlus-MongoDB"
highlights:
  - "Modelo lógico de una red de bibliotecas implementado en dos paradigmas distintos."
  - "Cursores, transacciones y triggers en Oracle SQL*Plus."
  - "Consultas y agregaciones en MongoDB para el mismo modelo de datos."
  - "Comparativa práctica entre modelado relacional y modelado documental."
---

## El proyecto

Ejercicios prácticos que implementan **el mismo modelo de datos** (una red de bibliotecas con libros, socios y préstamos) en dos sistemas muy distintos: **Oracle** (relacional) y **MongoDB** (documental).

## Enfoque

El objetivo era entender las diferencias reales entre ambos paradigmas, no solo en la sintaxis, sino en la forma de modelar:

- **Oracle**: tablas normalizadas, claves foráneas, cursores PL/SQL, triggers para integridad referencial y transacciones.
- **MongoDB**: colecciones desnormalizadas, documentos anidados, agregaciones con `$lookup`, `$group` y `$match`.

## Conclusión

La comparación deja claro que **no hay un paradigma mejor**, sino uno más adecuado según el caso de uso. El relacional brilla por su integridad y normalización; el documental por su flexibilidad y velocidad de lectura.