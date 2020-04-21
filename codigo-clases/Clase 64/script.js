// API
// Application Programing Interface

// FRONTEND ---> BACKEND ----> BASE DE DATOS
// CLIENTE       SERVIDOR      SERVIDOR

// HTTP
// Hypertext Transfer Protocol

// * POST - Agregar - Create
// * GET - Obtener - Read
// * PUT - Actualizar - Update
// * DELETE - Borrar - Delete

const actualizarGatito = (data) => {
  const img = document.getElementById('cat-img')
  img.src = data.url
  img.width = data.width
  img.height = data.height
}

const actualizarRazas = (razas) => {
  const dropdown = document.querySelector('.dropdown-content')
  dropdown.innerHTML = ''

  const htmlRazas = razas
    .map((raza) => `<a class="dropdown-item">${raza.name}</a>`)
    .join('')

  dropdown.innerHTML = htmlRazas
}

const obtenerGatitoRandom = () => {
  axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then((response) => actualizarGatito(response.data[0]))
}

const obtenerRazas = () => {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then((response) => actualizarRazas(response.data))
}

// query params

// * www.mipagina.com/?param=valor&otro=valor

const actualizarRaza = (raza) => {
  document.getElementById('breed-description').innerHTML = raza.description
}

const obtenerRaza = (raza) => {
  axios
    .get(`https://api.thecatapi.com/v1/breeds/search?q=${raza}`)
    .then((response) => actualizarRaza(response.data[0]))
}

window.onload = () => {
  // Promesa o promise
  // const botonGatoAleatorio = document.getElementById('random-cat-btn')
  // botonGatoAleatorio.addEventListener('click', obtenerGatitoRandom)

  document.querySelector('.dropdown').addEventListener('click', (event) => {
    document.querySelector('.dropdown').classList.toggle('is-active')
  })

  document.addEventListener('click', (event) => {
    if (event.target.className === 'dropdown-item') {
      obtenerRaza(event.target.innerText)
    }
  })

  obtenerRazas()

  // obtenerGatitoRandom()
}

// // asincrona
// console.log('antes')
// setTimeout(() => console.log('primero'), 1000)
// console.log('en el medio')
// setTimeout(() => console.log('segundo'), 500)
// console.log('en el medio')
// setTimeout(() => console.log('tercero'), 700)
// console.log('despues')
