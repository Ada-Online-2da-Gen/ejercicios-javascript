 
const tablero = 
[
  [1, 0],
  [1, 0]
]

const sumar = (a, b) => a + b

const valores = [0, 1]

const duplicarItems = (items) => {
  const duplicados = []
  let i = 0;
  while(duplicados.length < items.length * 2) {
    duplicados.push(items[i])
    duplicados.push(items[i])
    i++;
  }
  return duplicados
}

const aArray2d = (items) => {
  return  [
    [2, 2],
    [5, 2]
  ]
}

const obtenerIndexRandom = items => Math.round(Math.random() * (items.length - 1))

const randomizarItems = (items) => {
  const indicesRnd = []
  const itemsRnd = []

  while(indicesRnd.length < items.length) {
    const indexRnd = obtenerIndexRandom(items)
    if (!indicesRnd.includes(indexRnd)) {
      indicesRnd.push(indexRnd)
      itemsRnd.push(items[indexRnd])
    }
  }
}

const obtenerTableroRandom = (items) => {
  const itemsDuplicados = duplicarItems(items)
  const itemsRandoms = randomizarItems(itemsDuplicados)
  const tablero = array2d(itemsRandoms)

  return tablero
}
