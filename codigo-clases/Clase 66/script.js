const $ = (elem) => document.querySelector(elem)
const $$ = (elem) => document.querySelectorAll(elem)

const API_KEY = '6a093eb3-b481-44c9-b306-bf1486088068'

/**
 * ==============================================
 * HELPERS
 * ==============================================
 */

const obtenerUsuario = () => localStorage.getItem('usuario')

/**
 * ==============================================
 * HTTP REQUEST
 * ==============================================
 */

/**
 * Buscar una imagen aleatoria
 * y actualiza la imagen de la sección "Random"
 */
const obtenerGatiteAleatorio = () => {
  $('#cat-img').classList.add('img-is-loading')
  $('#random-cat-btn').classList.add('is-loading')

  axios.get('https://api.thecatapi.com/v1/images/search').then((response) => {
    actualizarImagenRandomGatite(response.data[0])
  })
}

/**
 * Buscar una lista de razas a partir de un string
 * y actualiza la tabla de la sección "Buscador de razas"
 */
const buscarRazas = (busqueda) => {
  $('#breed-search-input').parentElement.classList.add('is-loading')
  $('#breed-search-btn').classList.add('is-loading')

  axios
    .get(`https://api.thecatapi.com/v1/breeds/search?q=${busqueda}`)
    .then((response) => {
      actualizarResultadoBusquedaRazas(response.data)

      $('#breed-search-input').parentElement.classList.remove('is-loading')
      $('#breed-search-btn').classList.remove('is-loading')
    })
}

/**
 * Obtiene la lista de razas
 * y actualiza el select sección "Raza"
 */
const obtenerRazas = () => {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then((response) => actualizarDropdownRazas(response.data))
}

/**
 * Obtiene la info de una raza específica a partir de su id
 * y actualiza la info de la card de la sección "Razas"
 */
const obtenerRaza = (raza) => {
  axios
    .get(`https://api.thecatapi.com/v1/breeds/${raza}`)
    .then((response) => actualizarInfoCardRaza(response.data))
}

/**
 * Obtiene la imagen de una raza específica a partir de su id
 * y actualiza la imagen de la card de la sección "Razas"
 */
const obtenerImagenRaza = (raza) => {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_id=${raza}`)
    .then((response) => actualizarImagenCardRaza(response.data[0].url))
}

/**
 * Busca imágenes según el número de página
 * y actualiza las imágenes de la sección "Imágenes"
 */
const obtenerImagenes = (pagina = 0) => {
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=9&page=${pagina}&order=desc&api_key=${API_KEY}`
    )
    .then((response) => {
      actualizarImagenes(response.data)
    })
}

/**
 * Busca los favoritos de un usuario y actualiza
 * las imágenes de la sección "Favoritos"
 */
const obtenerFavoritos = () => {
  const usuario = obtenerUsuario()
  axios
    .get(
      `https://api.thecatapi.com/v1/favourites?sub_id=${usuario}&api_key=${API_KEY}`
    )
    .then((respuesta) => actualizarFavoritos(respuesta.data))
}

/**
 * Agregar un favorito a un usuario
 * y actualiza los favoritos
 */
const agregarFavorito = (evento) => {
  /**
   * Chequea que el elemento clickeado tenga la clase que nos interesa
   */
  if (!evento.target.classList.contains('add-to-fav')) {
    return
  }

  /**
   * Obtiene el elemento padre donde está guardado el id de la imagen
   */
  const imageId = evento.target.closest('.card').dataset.id

  /**
   * Crea la información a enviar
   */
  const payload = {
    image_id: imageId,
    sub_id: obtenerUsuario(),
  }

  /**
   * Hace un pedido con el método POST al endpoint de favoritos
   * pasándole la información de la imagen y el usuario que lo agregó
   * y luego actualiza los parámetros
   */
  axios
    .post(`https://api.thecatapi.com/v1/favourites?api_key=${API_KEY}`, payload)
    .then(() => obtenerFavoritos())
}

/**
 * Devuelve el string del html de la card
 * de la sección "Imágenes"
 */
const obtenerImgTemplate = (src, imageId) => `
  <div class="column is-4">
    <div class="card" data-id="${imageId}">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="${src}"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer class="card-footer">
        <span class="icon has-text-primary is-large">
          <i class="fas fa-lg fa-heart add-to-fav"></i>
        </span>
        <span class="icon has-text-success is-large">
          <i class="fas fa-lg fa-thumbs-up"></i>
        </span>
        <span class="icon has-text-danger is-large">
          <i class="fas fa-lg fa-thumbs-down"></i>
        </span>
      </footer>
    </div>
  </div>
`

/**
 * Devuelve el string del html de la card
 * de la sección "Favoritos"
 */
const obtenerFavTemplate = (src, favId) => `
  <div class="column is-4">
    <div class="card" data-id="${favId}">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="${src}"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer class="card-footer">
        <span class="icon has-text-danger is-large">
          <i class="fas fa-lg fa-trash-alt"></i>
        </span>
      </footer>
    </div>   
  </div>
`

/**
 * ==============================================
 * UPDATES DOM
 * ==============================================
 */

const actualizarTab = (evento) => {
  // Oculto secciones
  $$('.tab-section').forEach((section) => section.classList.add('is-hidden'))
  // Muestro sección activa
  const idSeccion = evento.target.getAttribute('href')
  $(idSeccion).classList.remove('is-hidden')
  // Deselecciona tabs
  $$('.tabs li').forEach((tab) => tab.classList.remove('is-active'))
  // Selecciona tab activa
  evento.target.parentElement.classList.add('is-active')
}

const actualizarImagenRandomGatite = (data) => {
  const img = document.getElementById('cat-img')
  img.src = data.url
  img.width = data.width
  img.height = data.height
}

const actualizarDropdownRazas = (razas) => {
  const dropdown = $('#breed-dropdown')
  dropdown.innerHTML = ''

  const htmlRazas = razas
    .map((raza, i) => `<option value=${raza.id}>${raza.name}</option>`)
    .join('')

  dropdown.innerHTML = htmlRazas
  obtenerRaza(dropdown.value)
  obtenerImagenRaza(dropdown.value)
}

const actualizarInfoCardRaza = (data) => {
  $('#breed-name').innerHTML = data.name
  $('#breed-description').innerHTML = data.description

  const temperamento = data.temperament
    .split(', ')
    .map((attr) => `<span class="tag">${attr}</span>`)
    .join('')

  $('#breed-temperament').innerHTML = temperamento
}

const actualizarImagenCardRaza = (url) => {
  $('#breed-img').src = url
}

const actualizarResultadoBusquedaRazas = (razas) => {
  const resultados = razas
    .map((raza) => `<tr><td>${raza.name}</td></tr>`)
    .join('')
  $('#breed-search-results').innerHTML = resultados
}

const actualizarImagenes = (imagenes) => {
  const resultado = imagenes
    .map((imagen) => obtenerImgTemplate(imagen.url, imagen.id))
    .join('')
  $('#image-search-results').innerHTML = resultado
}

const actualizarFavoritos = (favoritos) => {
  console.log('funciona')
  const resultado = favoritos
    .map((favorito) => obtenerFavTemplate(favorito.image.url, favorito.id))
    .join('')

  $('#favourites-list').innerHTML = resultado
}

/**
 * ==============================================
 * INICIALIZACIONES
 * ==============================================
 */

const inicializarTabs = () => {
  $$('.tabs li a').forEach((tab) =>
    tab.addEventListener('click', actualizarTab)
  )
}

const inicializarGatiteAleatorio = () => {
  $('#random-cat-btn').addEventListener('click', obtenerGatiteAleatorio)

  // Cuando la imagen se carga
  $('#cat-img').addEventListener('load', () => {
    $('#cat-img').classList.remove('img-is-loading')
    $('#random-cat-btn').classList.remove('is-loading')
  })

  obtenerGatiteAleatorio()
}

const inicializarRazas = () => {
  $('#breed-dropdown').addEventListener('change', (evento) => {
    obtenerRaza(evento.target.value)
    obtenerImagenRaza(evento.target.value)
  })
  obtenerRazas()
}

const inicializarBuscadorRazas = () => {
  $('#breed-search-btn').addEventListener('click', () => {
    const busqueda = $('#breed-search-input').value
    buscarRazas(busqueda)
  })
}

const inicializarBusquedaImagenes = () => {
  obtenerImagenes()

  let pagina = 0

  $('#next-page-btn').addEventListener('click', () => {
    pagina++
    obtenerImagenes(pagina)
    $('#page').innerHTML = `Página ${pagina}`
  })

  $('#previous-page-btn').addEventListener('click', () => {
    pagina = pagina > 0 ? pagina - 1 : 0
    obtenerImagenes(pagina)
    $('#page').innerHTML = `Página ${pagina}`
  })

  document.addEventListener('click', agregarFavorito)
}

const checkearUsuarioLogueado = () => {
  const usuario = obtenerUsuario()
  $('#username').innerHTML = `Hola, ${usuario}`
  obtenerFavoritos()
}

const inicializarUsuario = () => {
  const modal = $('.modal')
  const input = $('#user-input')

  const toggleModal = () => modal.classList.toggle('is-active')

  $('#open-change-user-btn').addEventListener('click', toggleModal)
  $('.modal-close').addEventListener('click', toggleModal)
  $('#cancel-change-user-btn').addEventListener('click', toggleModal)

  /**
   * Al cambiar de usuario
   * - Guardamos el usuario en localStorage
   * - Cerramos e modal
   * - Actualizamos el usuario
   */
  $('#change-user-btn').addEventListener('click', () => {
    localStorage.setItem('usuario', input.value)
    toggleModal()
    checkearUsuarioLogueado()
  })

  checkearUsuarioLogueado()
}

const inicializarFavoritos = () => {
  obtenerFavoritos()
}

const inicializar = () => {
  inicializarUsuario()
  inicializarTabs()
  inicializarGatiteAleatorio()
  inicializarRazas()
  inicializarBuscadorRazas()
  inicializarBusquedaImagenes()
  inicializarFavoritos()
}

window.onload = inicializar
