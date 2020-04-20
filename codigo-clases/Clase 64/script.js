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

const obtenerGatitoRandom = () => {
  axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then((response) => actualizarGatito(response.data[0]))
}

window.onload = () => {
  // Promesa o promise
  const botonGatoAleatorio = document.getElementById('random-cat-btn')
  botonGatoAleatorio.addEventListener('click', obtenerGatitoRandom)

  obtenerGatitoRandom()
}

// // asincrona
// console.log('antes')
// setTimeout(() => console.log('primero'), 1000)
// console.log('en el medio')
// setTimeout(() => console.log('segundo'), 500)
// console.log('en el medio')
// setTimeout(() => console.log('tercero'), 700)
// console.log('despues')
