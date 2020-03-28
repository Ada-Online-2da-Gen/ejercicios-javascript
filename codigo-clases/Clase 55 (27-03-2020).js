// * Encontrar la palabra con mayor puntaje
// * Cada letra tiene una puntuación según la posición en el alfabeto: a es 0 y z es 26
// * La puntuación de una palabra es la suma de las puntuaciones de sus letras

// * Obtener la puntuación de una letra con
// * Por cada palabra, sumar los puntajes de cada una de sus letras
// * Comparar los puntajes de cada palabra y devolver la palabra con mayor puntaje

const palabraConMasPuntaje = (palabras) => {
  const puntajeLetra = letra => "abcdefghijklmnñopqrstuvwxyz".indexOf(letra)
  const aPuntajePalabra = (suma, letra) => suma + puntajeLetra(letra)
  const puntajePalabra = palabra => [...palabra].reduce(aPuntajePalabra, 0)
  const aPalabraConMasPuntaje = (palabraMayor, palabra) => 
    puntajePalabra(palabraMayor) > puntajePalabra(palabra) ? palabraMayor : palabra

  return palabras.reduce(aPalabraConMasPuntaje)
}

// -------------------------------------------------

const animales = [
  { nombre: 'Sapo' }, 
  { nombre: 'Leon' },
  { nombre: 'Foca' },
  { nombre: 'Sapo' }
]

// const cantidades = [
//   { nombre: 'Sapo', repeticiones: 2 }, 
//   { nombre: 'Leon', repeticiones: 1 }, 
//   { nombre: 'Foca', repeticiones: 1 } 
// ]

const aRepeticiones = (cuentaParcial, animal) => {
  const existe = cuentaParcial.some(cantidad => cantidad.nombre === animal.nombre)

  if (!existe) {
    return [...cuentaParcial, {nombre: animal.nombre, repeticiones: 1}]
  } else {
    return cuentaParcial.map(
      cuenta => 
        cuenta.nombre === animal.nombre ?
        {
          ...cuenta, 
          repeticiones: cuenta.repeticiones + 1
        } :
        cuenta
    )
  }
}

const cantidades = animales.reduce(aRepeticiones, [])

const aMayorRepeticion = (mayor, cantidad) => 
  cantidad.repeticiones > mayor ? cantidad.repeticiones : mayor

const conMasRepeticiones = (item) => item.repeticiones === masRepeticiones

const masRepeticiones = cantidades.reduce(aMayorRepeticion, 0)

const animalesFiltrados = cantidades.filter(conMasRepeticiones)
