# Proyecto Final

## Consigna

Usando la API de [MovieDB](https://developers.themoviedb.org/3/getting-started/introduction), crear una *Single Page Application* para buscar series y películas.

[Ejemplo](https://movies.jason.codes/) (Para tener una idea aproximada)

## Criterios de aceptación

- Se deben respetar las vistas indicadas
- Se deben incluir los componentes requeridos
- Debe ser responsive
- Todas las integrantes del grupo deben realizar commits y PR
- El proyecto debe estar deployado y ser accesible desde una URL

## Criterios de evaluación

- Buenos nombres de componentes, props, funciones y variables
- Reutilización de componentes (incluidos `styled-components` cuando sea posible)
- Buena UX, lo que implica 
  - siempre se tienen que tener en claro en qué vista se está (título + link de navegación resaltado)
  - los elementos que son interactivos deben indicarlo mediante algún cambio de estilo al interactuar con ellos, es decir, al hacer hover, focus, etc
  - deshabilitar/habilitar elementos cuando sea necesario
  - dar feedback al usuario: cuando hay errores, cuando no hay resultados, cuando se están cargando los resultados, etc
- Legibilidad de código
- Estructura del proyecto
- Uso de PRs por feature

## Vistas

<br>

|Nombre|Ruta|Descripción
|---|---|---|
| **Home** | `/` | `Hero` con película trending (con link a la película). `CardListPreview` de películas trending. `CardListPreview` de series trending. 
| **Películas** | `/movie` | `Hero` con película más popular (con link a la película). `CardListPreview` con categorías |
| Películas por categoría | `/movie/category/:categoryId` |Listado de cards de series con paginado|  
| Detalle de película | `/movie/:movieId` | Hero con imagen. Navegación de subvistas |
| Info de película (1)| `/movie/:movieId/info` |Poster de película con información |
| Elenco de película (1)| `/movie/:movieId/cast` |Listado de cards del elenco *sin paginado*|
| Películas similares (1)|  `/movie/:movieId/similar` |Listado de cards de películas similares *sin paginado*|
| **Series** | `/tv` | `Hero` con serie más popular (con link a la serie). `CardListPreview` con categorías |
| Series por categoría | `/tv/category/:categoryId` | Listado de cards de series con paginado
| Detalle de serie | `/tv/:tvId` | Hero con imagen. Navegación de subvistas |
| Info de serie (2)| `/tv/:tvId/info` |Poster de serie con información|
| Temporada de serie (2)| `/tv/:tvId/season/:seasonNumber` |Select con temporadas. Listado de cards de episodios. Cantidad de episodios en temporada seleccionada.
| Series similares (2)|  `/tv/:tvId/similar` |Listado de cards de series similares *sin paginado*|
| **Búsqueda** | `/search/` | Búsqueda y listado de cards de resultados con paginado |
| **Descubrir** | `/discover/` | Filtros de búsqueda y listado de cards de resultados con paginado |
<br>

- Las vistas marcadas en negrita son las principales y deben ser accesibles desde cualquier otra vista (estar en la navegación principal)
- (1) Subvista de **Detalle de película**
- (2) Subvista de **Detalle de serie**

## Comentarios de la vistas

### Películas por categoría

**Categorías:** 
- `popular` 
- `top_rated` 
- `now_playing`

### Info de película

Debe contener los siguientes datos:

- Sinopsis
- Géneros
- Duración
- Fecha de estreno
- Presupuesto

### Series por categoría

**Categorías:** 
- `popular` 
- `top_rated` 
- `on_the_air`

### Info de serie

Debe contener los siguientes datos:

- Sinopsis
- Géneros
- Fecha de estreno
- Cantidad de temporadas
- Cantidad de episodios

### Búsqueda

- `select` para seleccionar medio: `Película` o `Televisión`
- `input` de texto para  buscar por nombre
- Botón para realizar la búsqueda
  
### Descubrimiento  
  
- `select` para seleccionar medio: `Película` o `Televisión`
- `select` para seleccionar género
- `select` para seleccionar el criterio para el año de estreno:
  - Antes que
  - Exactamente
  - Después de
- `select` para seleccionar el año de estreno
- `select` para ordernar los resultados:
  - Más populares
  - Menos populares
  - Más nuevas
  - Más viejas
  - Con más recaudación
  - Con menos recaudación
<br>

- El endpoint de la API es el siguiente para [películas](https://developers.themoviedb.org/3/discover/movie-discover) y para [series](https://developers.themoviedb.org/3/discover/tv-discover)
- El género depende del medio, por lo tanto cuando se cambia a película o televisión, tienen que actualizarse el select del género
- El select con los años de estreno tienen que generarse dinámicamente, para eso obtener la película o serie (dependiendo de lo elegido) más antigua, obtener el año de estreno, y completar con los años restantes hasta la actualidad
- Tanto género como año de estreno tienen que tener una opción general, como "Todos" o "Cualquiera". Cuando se selecciona, no se tiene que incluir dicho parámetro de búsqueda en la llamada a la API

## Comentarios de componentes

- `Card de película` y `Card de serie` deben tener:
  - Imagen de poster
  - Titulo
  - Rating con puntaje
  
- `Card de episodio` debe tener:
  - Imagen de episodio
  - Número de episodio (respecto a la temporada, no total)
  - Titulo
  - Sinopsis  
  - Fecha de estreno
  
- `Card de elenco` debe tener:
  - Imagen de la persona
  - Nombre y apellido de la persona
  - Personaje que interpreta

## Componentes obligatorios

### CardListPreview

- Debe tener un título
- Debe tener un link que lleve a una vista
- Debe tener una lista de 5 cards
- Los datos de los puntos anteriores se pasan como props

### Paginado

- Debe aceptar una página máxima, una página actual y un callback para el evento `onPageChange`
- El componente debe tener el siguiente comportamiento:
- Si hay 7 páginas o menos debe mostrarlas todas

`[1, 2, 3, 4, 5, 6, 7]`
- Si hay más de 7 páginas, debe mostrar 7 elementos máximos

`[1, 2, 3, 4, 5, ..., 10]`
- Si se selecciona hasta un rango de 4 páginas desde atrás o adelante, debe seguirlo mostrando de la siguiente forma: el rango de 5 páginas en el que se esté (inicial o final), puntos suspensivos, y la página extrema contraria

`[1, 2, 3, 4, 5, ..., 10]`

`[1, ..., 6, 7, 8, 9, 10]`
- Si se selecciona más allá de 4 páginas, se debe mostrarlo de la siguiente forma: las dos páginas en los extremos, seguidas de puntos suspensivos, y 3 páginas con la actual en el medio y la previa y la siguiente a los costados

`[1, ..., 4, 5, 6, ..., 10]`

`[1, ..., 5, 6, 7, ..., 10]`
- El paginado tiene que tener también flechas a ambos costados para avanzar o retroceder de página, las cuales tienen que deshabilitarse cuando se llegan a los extremos
- Componente de ejemplo: [Basic Pagination](https://material-ui.com/components/pagination/#basic-pagination)


### Rating

- Debe mostrar un puntaje con estrellas a partir de un número del 1 al 10
- Debe mostrar medias estrellas. Por ejemplo, 3 es una estrella y media
- Debe redondear el puntaje
- Debe tener la posibilidad o no de mostrar el puntaje al lado de las estrellas

[Componente de ejemplo](https://material-ui.com/components/rating/) (Para tener una idea aproximada)

### Hero

- Debe mostrar una imagen de fondo
- Debe mostrar título, rating y sinopsis
- Debe poder tener una opción para llevar a la página de la película o serie
- Los datos de los puntos anteriores se pasan como props

La API tiene distintas imágenes y opciones de imágenes:

[Link](https://developers.themoviedb.org/3/getting-started/images)
