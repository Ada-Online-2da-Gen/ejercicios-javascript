const obtenerColorRandom = colores => {
  const random = Math.round(Math.random() * (colores.length - 1))
  return colores[random]
}

const jugar = (colores, rondasMaximas) => {
  const secuencia = []
  let juegoTerminado = false
  let ronda = 0

  while (!juegoTerminado && ronda < rondasMaximas) {
    const color = obtenerColorRandom(colores)

    secuencia.push(color)

    alert(`Ronda ${ronda}. La secuencia actual es: ${secuencia}`)

    for (let i = 0; i < secuencia.length; i++) {
      const jugada = prompt(`Ingrese un color (${colores}):`)
      if (jugada !== secuencia[i]) {
        juegoTerminado = true
      }
    }

    ronda++
  }

  return ronda
}

const obtenerMenu = (colores, partidas, modo) => {
  return `
  Modo actual: ${modo}.
  Colores actuales: ${colores.join(', ')}.
  Partidas jugadas: ${partidas}.
  
  Elija una opción:
  --------------------------------
  - [I]NICIAR JUEGO
  - CAMBIAR [M]ODO
  - CAMBIAR [C]OLORES
  - VER [H]ISTORIAL DE PARTIDAS
  - [S]ALIR`
}

const cambiarModo = () => {
  const modo = prompt('Seleccione modo: CLASICO o SUPERVIVENCIA')
  if (modo === 'CLASICO') {
    const rondas = Number(prompt('Cuántos rondas desea jugar?'))
    return rondas
  }
  return Infinity
}

const cambiarColores = () => {
  const colores = prompt(
    'Ingrese colores a jugar, separados por un espacio'
  ).split(' ')
  return colores
}

const obtenerOpcion = menu => {
  return prompt(menu)
}

const obtenerHistorial = historial => {
  let partidas = 'HISTORIAL'
  for (let i = 0; i < historial.length; i++) {
    partidas += `\n[${i}]: ${historial[i]}`
  }
  return partidas
}

const obtenerResumen = (rondasJugadas, rondasMaximas, colores) => {
  return rondasMaximas === Infinity
    ? `MODO SUPERVIVENCIA: ${colores.length} colores. ${rondasJugadas} rondas ganadas.`
    : `MODO CLASICO: ${colores.length} colores. ${rondasMaximas} rondas. ${
        rondasJugadas === rondasMaximas
          ? 'Partida ganada'
          : `Derrota en ronda ${rondasJugadas}`
      }`
}

const iniciar = () => {
  const historial = []
  let colores = ['rojo', 'azul', 'amarillo', 'verde']
  let enEjecucion = true
  let rondasMaximas = 8

  while (enEjecucion) {
    const modo = rondasMaximas === Infinity ? 'SUPERVIVENCIA' : 'CLASICO'
    const menu = obtenerMenu(colores, historial.length, modo)
    const opcion = obtenerOpcion(menu)

    switch (opcion) {
      case 'I':
      case 'INICIAR JUEGO':
        const resultado = jugar(colores, rondasMaximas)
        const resumen = obtenerResumen(resultado, rondasMaximas, colores)
        historial.push(resumen)
        break
      case 'M':
      case 'CAMBIAR MODO':
        rondasMaximas = cambiarModo()
        break
      case 'C':
      case 'CAMBIAR COLORES':
        colores = cambiarColores()
        break
      case 'H':
      case 'VER HISTORIAL DE PARTIDAS':
        alert(obtenerHistorial(historial))
        break
      case 'S':
      case 'SALIR':
        enEjecucion = false
        break
      default:
    }
  }
}

iniciar()
