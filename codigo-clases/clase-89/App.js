// operaciones sincronas - bloqueantes
// operaciones asincronas - no bloqueantes

// thread - hilos -> ocurren procesos (operaciones...)
// multi-threading
// race-condition -> carrera de condición

// paralelismo -> se pueden ejecutar procesos al mismo tiempo
// concurrencia -> cada proceso se ejecuta uno detrás de otro, pero se va completando de a poco, lo que da una ilusión de simultaneidad

// javascript -> single-threading

// setTimeout
// setInterval
// fetch

// CONTEXTO DE EJECUCION PRINCIPAL  || CONTEXTO DE EJECUCION SECUNDARIO

/**
  
  console.log("Comienzo")
  setTimeout(                        () => console.log("Medio") (*)
    () => console.log("Medio"), 
    0
  )
  console.log("Final")
  (*) console.log("Medio")

 */

setTimeout(
  setTimeout(
    setTimeout(
      setTimeout(() => console.log('Medio'), 0),
      0
    ),
    0
  ),
  0
)

const funcionA = () => setTimeout(() => console.log('sarasa'), 0)
const funcionB = () => setTimeout(funcionA, 0)
const funcionC = () => setTimeout(funcionB, 0)
const funcionD = () => setTimeout(funcionC, 0)

setTimeout(funcionD, 0)

new Promise((resolve, reject) => {
  resolve()
})

// status -> resolved

new Promise((resolve, reject) => {
  reject()
})

// status -> rejected

new Promise((resolve, reject) => {
  resolve('Valor de respuesta')
})

new Promise((resolve, reject) => {
  reject('Mensaje de error')
})

// =========================

const pedidoComida = new Promise((resolve, reject) => {
  resolve('Acá tiene sus tallarines')
})

// La promesa se resuelve (cumple) y devuelve el valor "Acá tiene sus tallarines"
// El resultado de esa promesa lo puedo obtener con el método then
// El método then toma un callback que se ejecuta cuando la promesa se cumple
// El primer parámetro del callback del then es el valor que la promesa devuelve

pedidoComida.then((comida) => console.log(comida))

const pedidoComida = new Promise((resolve, reject) => {
  reject('La comida se quemó')
})

pedidoComida.catch((error) => console.log(error))

// ====

const pedirComida = () =>
  new Promise((resolve, reject) => {
    reject('La comida se quemó')
  })

pedirComida().catch((error) => console.log(error))

// ============

const pedirComida = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Acá tiene sus ñoquis'), 2000)
  })

pedirComida().then((comida) => console.log(comida))

Promise.resolve(5)
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => console.log(number))

fetch('www.miapi.com')
  .then((response) => response.json())
  .then((data) => fetch(data))
  .then((response) => response.json())
  .then((data) => console.log(data))

// sugar syntax -> async/await
