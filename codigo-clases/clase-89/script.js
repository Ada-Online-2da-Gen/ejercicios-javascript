const obtenerPersonajes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/')
  const data = await response.json()
  return data
}

const obtenerPersonajesAxios = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character/')
  return response.data
}

const consolearPersonajes = async () => {
  const data = await obtenerPersonajesAxios()
  console.log(data)
}

console.log('Antes')
consolearPersonajes()
console.log('Despues')
