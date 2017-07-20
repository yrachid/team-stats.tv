# Team Stats TV

A TV Monitor for (distributed) software development teams.

[![CircleCI](https://circleci.com/gh/othman853/team-stats.tv.svg?style=svg)](https://circleci.com/gh/othman853/team-stats.tv)
[![Code Climate](https://codeclimate.com/github/othman853/team-stats.tv/badges/gpa.svg)](https://codeclimate.com/github/othman853/team-stats.tv)
[![Test Coverage](https://codeclimate.com/github/othman853/team-stats.tv/badges/coverage.svg)](https://codeclimate.com/github/othman853/team-stats.tv/coverage)

# Tech Stack:

- Node.js

- Electron

# Test Stack:

- Spectron

- Mocha

- Chai

- TestDouble

- Proxyquire

- Stryker

# Getting started:

- Clone this repository

- `npm install`

# To generate a `.dmg` file:

Install the global `electron-builder` package first:

`npm install -g electron-builder`

This package is going to create a symlink into `/usr/local/bin/build`, so be aware of that.

Having the previously mentioned package installed and assuming you're using a computer with
through OS X, run:

- `npm run dist`

The generation of an executable for Linux or Windows is still an ongoing thing. coming soon. :)

To run the tests:
- `npm test`

- `npm run test:unit`

- `npm run test:component`

- `npm run test:functional`

# Motivación

Un intento de reemplazo de los browsers como herramienta de Tele.

### Que debe hacer la app para que sea mejor que los browsers:

Debe permitir que el manejo de múltiplas teles sea más sencillo. Quizá pueda también servir como un medio de comunicación de equipos distribuidos.

Ejemplo:
- Mitad del equipo se queda en `Porto Alegre` y la otra mitad se queda en `Santiago de Chile`
- Hay una tele en `POA` y una tele en `SCL` para que todos puedan mirar el status del CI y las estadísticas de la aplicación.

### Diferentemente de los browsers, la app debe:

- ~~Permitir configureo de una `tele` utilizando archivos `json`~~(listo)
  - ~~Eso permite que la configuración sea versionada en un repo git~~(listo)
- ~~Permitir refresco individual de cada `tile`~~ (listo)
- ~~Permitir configurear refresco automatico de `tiles`~~ (listo)
- ~~Permitir controlar zoom individual~~ (listo)
- ~~Ocupar menos espacio de la pantalla, sin tener bordas y optimizando el HTML renderizado.~~ (listo)
- Tiene un botón para hangouts

Incertidumbres:
- Manejo de sesiónes para que no sea necesário hacer login toda vez
- Rehacer login en todas las tiles en una única vez
- Comunicación entre teles via `web sockets`.
- Otimización de páginas via Web Scrapping o llamadas a APIs dentro de la App.
 - En lugar de una webview, quizá una llamada a la API de Jenkins con un rendering próprio? :boar:
 - Borrar las navbars de un sítio con web scrapping para que se pueda desplegar solo lo que es interesante.
