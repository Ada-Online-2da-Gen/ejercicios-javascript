# Proyecto Final

## Consigna

Usando la API de [MovieDB](https://developers.themoviedb.org/3/getting-started/introduction), crear una *Single Page Application* 

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

## Vistas

<br>

|Nombre|Ruta|Descripción|Subvista de |
|---|---|---|---|
| Home | `/` |
| Películas | `/movies` |
| Películas por categoría | `/movie/category/:categoryId` |Listado de cards de series con paginado|  
| Detalle de película | `/movie/:movieId` | Hero con imagen. Navegación de subvistas |
| Info de película | `/movie/:movieId/info` ||| Detalle de película |
| Elenco de película | `/movie/:movieId/cast` |Listado de cards del elenco *sin paginado*| Detalle de película |
| Películas similares |  `/movie/:movieId/similar` |Listado de cards de películas similares *sin paginado*| Detalle de película |
| Series | `/tv` |
| Series por categoría | `/tv/category/:categoryId` | Listado de cards de series con paginado
| Detalle de serie | `/tv/:tvId` | Hero con imagen. Navegación de subvistas |
| Info de serie | `/tv/:tvId/info` ||| Detalle de serie |
| Temporada de serie | `/tv/:tvId/seasons/:season` |Select con temporadas. Listado de cards de episodios. Cantidad de episodios en temporada seleccionada.| Detalle de serie |
| Series similares |  `/tv/:tvId/similar` |Listado de cards de series similares *sin paginado*| Detalle de serie |
| Búsqueda | '/search/` | Filtros de búsqueda y listado de cards de resultados con paginado |
<br>

## Comentarios de la vistas

### Películas por categoría

**Categorías:** 
- `popular` 
- `top_rated` 
- `now_playing`

### Series por categoría

**Categorías:** 
- `popular` 
- `top_rated` 
- `on_the_air`

### Búsqueda

Debe tener un ??? con dos modos, normal y avanzado. La búsqueda se realiza cuando se aprieta en un botón de buscar.

- **Normal**
  - `select` para seleccionar medio: `Película` o `Televisión`
  - `input` de texto para  buscar por nombre
- **Avanzado**
  - `select` para seleccionar medio: `Película` o `Televisión`
  - `input` de texto para buscar por nombre
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
    - A/Z
    - Z/A
    - Con más recaudación
    - Con menos recaudación
<br>

- El endpoint de la API es el [siguiente](https://developers.themoviedb.org/3/discover/movie-discover)
- El género depende del medio, por lo tanto cuando se cambia a película o televisión, tienen que actualizarse el select del género
- El select con los años de estreno tienen que generarse dinámicamente, para eso obtener la película o serie (dependiendo de lo elegido) más antigua, obtener el año de estreno, y completar con los años restantes hasta la actualidad
- Tanto género como año de estreno tienen que tener una opción general, como "Todos" o "Cualquiera". Cuando se selecciona, no se tiene que incluir dicho parámetro de búsqueda en la llamada a la API

## Componentes obligatorios

### CardList

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

## Otros requisitos

- Todas las vistas tienen que tener un título
