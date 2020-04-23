const $ = (elem) => document.querySelector(elem)
const $$ = (elem) => document.querySelectorAll(elem)

const API_KEY = '6a093eb3-b481-44c9-b306-bf1486088068'

/**
 * ==============================================
 * HTTP REQUEST
 * ==============================================
 */

const obtenerGatiteAleatorio = () => {
  $('#cat-img').classList.add('img-is-loading')
  $('#random-cat-btn').classList.add('is-loading')

  axios.get('https://api.thecatapi.com/v1/images/search').then((response) => {
    actualizarGatite(response.data[0])
  })
}

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

const obtenerRazas = () => {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then((response) => actualizarRazas(response.data))
}

const obtenerRaza = (raza) => {
  axios
    .get(`https://api.thecatapi.com/v1/breeds/${raza}`)
    .then((response) => actualizarRaza(response.data))
}

const obtenerImagenRaza = (raza) => {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_id=${raza}`)
    .then((response) => actualizarImagenRaza(response.data[0].url))
}

const obtenerImagenes = (pagina = 0) => {
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=9&page=${pagina}&order=desc&api_key=6a093eb3-b481-44c9-b306-bf1486088068`
    )
    .then((response) => {
      actualizarImagenes(response.data)
    })
}

const obtenerImgTemplate = (src) => `
  <div class="column is-4">
    <div class="card">
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
          <i class="fas fa-lg fa-heart"></i>
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

const actualizarGatite = (data) => {
  const img = document.getElementById('cat-img')
  img.src = data.url
  img.width = data.width
  img.height = data.height
}

const actualizarRazas = (razas) => {
  const dropdown = $('#breed-dropdown')
  dropdown.innerHTML = ''

  const htmlRazas = razas
    .map((raza, i) => `<option value=${raza.id}>${raza.name}</option>`)
    .join('')

  dropdown.innerHTML = htmlRazas
  obtenerRaza(dropdown.value)
  obtenerImagenRaza(dropdown.value)
}

const actualizarRaza = (data) => {
  $('#breed-name').innerHTML = data.name
  $('#breed-description').innerHTML = data.description

  const temperamento = data.temperament
    .split(', ')
    .map((attr) => `<span class="tag">${attr}</span>`)
    .join('')

  $('#breed-temperament').innerHTML = temperamento
}

const actualizarImagenRaza = (url) => {
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
    .map((imagen) => obtenerImgTemplate(imagen.url))
    .join('')
  $('#image-search-results').innerHTML = resultado
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
}

const inicializar = () => {
  inicializarTabs()
  inicializarGatiteAleatorio()
  inicializarRazas()
  inicializarBuscadorRazas()
  inicializarBusquedaImagenes()
}

window.onload = inicializar
