# Proyecto Final

## Consigna

Usando la API de [MovieDB](https://developers.themoviedb.org/3/getting-started/introduction), crear una *single page application* 

## Criterios de aceptación

## Vistas

<br>

|Nombre|Ruta|Descripción|Comentarios|Subvista de |
|---|---|---|---|---|
| Home | `/` |
| Películas | `/movies` |
| Películas por categoría | `/movie/category/:categoryId` |Listado de cards de series con paginado|   **Categorías:** `popular`, `top_rated` y `now_playing`
| Películas por género | `/movie/genre/:genreId` |Listado de cards de series con paginado
| Detalle de película | `/movie/:movieId` | Hero con imagen. Navegación de subvistas |
| Info de película | `/movie/:movieId/info` ||| Detalle de película |
| Elenco de película | `/movie/:movieId/cast` |Listado de cards del elenco *sin paginado*|| Detalle de película |
| Películas similares |  `/movie/:movieId/similar` |Listado de cards de películas similares *sin paginado*|| Detalle de película |
| Series | `/tv` |
| Series por categoría | `/tv/category/:categoryId` | Listado de cards de series con paginado |   **Categorías:** `popular`, `top_rated` y `on_the_air`
| Series por género | `/tv/genre/:genreId` | Listado de cards de series con paginado
| Detalle de serie | `/tv/:tvId` | Hero con imagen. Navegación de subvistas |
| Info de serie | `/tv/:tvId/info` ||| Detalle de serie |
| Temporada de serie | `/tv/:tvId/seasons/:season` |Select con temporadas. Listado de cards de episodios. Cantidad de episodios en temporada seleccionada.|| Detalle de serie |
| Series similares |  `/tv/:tvId/similar` |Listado de cards de series similares *sin paginado*|| Detalle de serie |

<br>

## Componentes obligatorios

### CardList

### Paginado

### Rating

## Otros requisitos

- Todas las vistas tienen que tener un título
