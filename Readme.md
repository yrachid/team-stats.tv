# Team Stats TV

Un intento de reemplazo de los browsers como herramienta de Tele.

### Que debe hacer la app para que sea mejor que los browsers:

Debe permitir que el manejo de múltiplas teles sea más sencillo. Quizá pueda también servir como un medio de comunicación de equipos distribuidos.

Ejemplo:
- Mitad del equipo se queda en `Porto Alegre` y la otra mitad se queda en `Santiago de Chile`
- Hay una tele en `POA` y una tele en `SCL` para que todos puedan mirar el status del CI y las estadísticas de la aplicación.

### Diferentemente de los browsers, la app debe:

- Permite configureo de una `tele` utilizando archivos `json`
  - Eso permite que la configuración sea versionada en un repo git
- Permite refresco individual de cada `tile`
- Permite configurear refresco automatico de `tiles`
- Permite controlar zoom individual
- Ocupa menos espaço de tela com bordas
- Tiene un botón para hangouts

Incertidumbres:
- Manejo de sesiónes para que no sea necesário hacer login toda vez
- Rehacer login en todas las tiles en una única vez
- Comunicación entre teles via `web sockets`.
- Otimización de páginas via Web Scrapping o llamadas a APIs dentro de la App.
 - En lugar de una webview, quizá una llamada a la API de Jenkins con un rendering próprio? :boar:
 - Borrar las navbars de un sítio con web scrapping para que se pueda desplegar solo lo que es interesante.
