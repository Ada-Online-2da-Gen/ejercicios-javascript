const root = document.getElementById('root')
const e = React.createElement

// Hacer un Button
// size: small, medium, large -> medium por default
// rounded: true o false -> border-radius o cuadrado 'flat' -> false por default
// text: el contenido del boton
// clase base

// * Componente (funcion) + Parametros (props) = UI

// * xs: price-small
// * md: price-medium
// * lg: price-large

// * Enum

const TAMANIO_PRECIO = {
  sm: 'price-small',
  md: 'price-medium',
  lg: 'price-large',
}

const Precio = ({ valor, esPromo = false, tamanio = 'md' }) => {
  const clasePromo = esPromo ? 'is-promo' : ''
  const contenido = esPromo ? `DESCUENTO!!! $${valor}` : `$${valor}`

  const claseCSS = `price ${clasePromo} ${TAMANIO_PRECIO[tamanio]}`

  return e('p', { className: claseCSS }, contenido)
}

// DINAMICO -> DEPENDERIA DE ALGUNA CONSULTA

const ListaPrecios = ({ valorPrecios = [] }) => {
  const precios = valorPrecios.map((valorPrecio) =>
    e(Precio, { valor: valorPrecio })
  )
  console.log(precios)

  let respuestaConsulta = [12, 34, 1002, 667, 888]
  return e('div', null, precios)
}

// Contenedor - Presentacion

const Cancion = ({ nombre, album, artista, duracion }) => {
  const texto = `${nombre} - ${album} - ${artista} - ${duracion}`
  return e('li', null, texto)
}

const ListaCanciones = ({ canciones }) => {
  const lista = canciones
    .sort((a, b) => (a.strTrack > b.strTrack ? 1 : -1))
    .map((cancion) =>
      e(Cancion, {
        nombre: cancion.strTrack,
        album: cancion.strAlbum,
        artista: cancion.strArtist,
        duracion: cancion.intDuration,
      })
    )

  return e('ol', null, lista)
}

const App = () => {
  return e('main', null, [e(ListaCanciones, { canciones: cancionesQueen })])
}

ReactDOM.render(e(App), root)
