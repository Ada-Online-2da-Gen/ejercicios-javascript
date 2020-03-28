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
