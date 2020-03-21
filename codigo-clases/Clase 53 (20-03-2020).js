const personas = [
  {
    nombre: "Juan",
    dinero: 550
  },
  {
    nombre: "María",
    dinero: 1200 
  },
  {
    nombre: "Carlos",
    dinero: 889 
  }
]


const aPersonaConMasDinero = (personaConMasDinero, persona) => 
  persona.dinero > personaConMasDinero.dinero ? persona : personaConMasDinero 

personas.reduce(aPersonaConMasDinero)

// ======================

const aLenguajes = empleade => empleade.lenguajes

const aArray = (arrayParcial, lenguajes) => [...arrayParcial, ...lenguajes]

const aLenguajesUnicos = (lenguajes, lenguaje) => 
  lenguajes.includes(lenguaje) ? lenguajes : [...lenguajes, lenguaje]

empleades
  .map(aLenguajes)
  .reduce(aArray)
  .reduce(aLenguajesUnicos, [])


////////////////////////////////////////////////////////////////

// find -> hace lo mismo que filter, pero devuelve el primer elemento que pasa el filtro o cumple la condicion
// every -> devuelve true si todos los elementos pasan la condicion del callback
// some -> devuelve true si al menos uno de los elementos pasa la condicion del callback
// sort -> permite ordenar (sorting) los elementos de un array según una condición

const sabePython = empleade => empleade.lenguajes.includes('Python')

empleades.find(sabePython)

// every

const mayorA20 = empleade => empleade.edad > 20

empleades.every(mayorA20)  // * true && true && true && false -> false

// some

empleades.some(mayorA20)  // * false || false || false || true -> true


const numeros = [4, 5, 123, 433, 23, 77, 88]

// * callback del sort
// * toma dos parámetros que son dos elementos a comparar
// * -1 -> a va a estar antes que b
// * 0 -> quedan como estan
// * 1 -> b va a estar antes que a

// const deMayorAMenor = (a, b) => b - a

const deMayorAMenor = (a, b) => { 
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  }
  return 0
}

// const deMenorAMayor = (a, b) => a - b

const deMenorAMayor = (a, b) => {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  }
  return 0
}

numeros.sort(deMayorAMenor)

const sueldoMenor = (a, b) => {
  return a.sueldo - b.sueldo
}

[...empleades].sort(sueldoMenor)
