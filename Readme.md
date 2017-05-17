# Team Stats TV

Un monitor para equipos distribuidos.

# Tech stack:

- Node.js

- Electron

- Vue (not yet, but soon)

- Socket.io

- Webpack (if possible, soon)


# How to:

As of today, there is no installer, the easiest way to get up and running is to: 

- Clone this repository

- `npm install`

- `npm start`

- select a valid `.json` configuration file (an example is cooming soon) from the file picker dialog

- pray for the best


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
