const obtenerLimites = tablero => {
  const limiteHorizontal = tablero[0].length - 1
  const limiteVertical = tablero.length - 1
  return [limiteHorizontal, limiteVertical]
}

const hayItem = (item, tablero) => {
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === item) {
        return true
      }
    }
  }

  return false
}

const obtenerTablero = tablero => {
  let tableroActual = '\n'

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      tableroActual += tablero[i][j]
    }
    tableroActual += '\n'
  }

  return tableroActual
}

const obtenerMovimiento = movimiento => {
  switch (movimiento) {
    case 'ARRIBA':
      return [0, -1]
    case 'DERECHA':
      return [1, 0]
    case 'ABAJO':
      return [0, 1]
    case 'IZQUIERDA':
      return [-1, 0]
    default:
      return [0, 0]
  }
}

const obtenerPosicion = (Item, tablero) => {
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === Item) {
        return [j, i]
      }
    }
  }
}

const obtenerNuevaPosicion = (posicionActual, movimiento, tablero) => {
  const limitesTablero = obtenerLimites(tablero)
  const limiteHorizontal = limitesTablero[0]
  const limiteVertical = limitesTablero[1]

  let nuevaPosX = posicionActual[0] + movimiento[0]
  let nuevaPosY = posicionActual[1] + movimiento[1]

  // Actualizo nueva futura posición si está en los bordes

  if (nuevaPosY < 0) {
    nuevaPosY = limiteVertical
  }
  if (nuevaPosY > limiteVertical) {
    nuevaPosY = 0
  }
  if (nuevaPosX < 0) {
    nuevaPosX = limiteHorizontal
  }
  if (nuevaPosX > limiteHorizontal) {
    nuevaPosX = 0
  }

  return [nuevaPosX, nuevaPosY]
}

const esItem = (item, coordenadas, tablero) => {
  const x = coordenadas[0]
  const y = coordenadas[1]
  return tablero[y][x] === item
}

const moverSerpiente = (posicion, nuevaPosicion, tablero) => {
  tablero[posicion[1]][posicion[0]] = '🌱'
  tablero[nuevaPosicion[1]][nuevaPosicion[0]] = '🐍'
}

const jugar = tablero => {
  while (hayItem('🍎', tablero)) {
    const accion = prompt(`Ingrese una opción para moverse: ARRIBA, DERECHA, ABAJO, IZQUIERDA
    ${obtenerTablero(tablero)}`)
    const movimiento = obtenerMovimiento(accion)
    const posicion = obtenerPosicion('🐍', tablero)
    const nuevaPosicion = obtenerNuevaPosicion(posicion, movimiento, tablero)

    if (esItem('🧱', nuevaPosicion, tablero)) {
      alert('¡Camino bloqueado!')
    } else {
      moverSerpiente(posicion, nuevaPosicion, tablero)
    }
  }
}

const tablero = [
  ['🌱', '🌱', '🍎', '🌱', '🌱'],
  ['🍎', '🧱', '🌱', '🧱', '🍎'],
  ['🌱', '🧱', '🐍', '🌱', '🌱'],
  ['🌱', '🍎', '🌱', '🧱', '🌱'],
  ['🍎', '🌱', '🌱', '🍎', '🧱'],
  ['🌱', '🌱', '🌱', '🌱', '🍎']
]

jugar(tablero)

alert('¡Felicitaciones! Has ganado 🎉🎉🎉')
