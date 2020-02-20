const obtenerTableroActual = (tablero, ocultarBombas = true) => {
  let tableroActual = '';
  
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (ocultarBombas && tablero[i][j] === '💣') {
        tableroActual += '📦';
      } else {
        tableroActual += tablero[i][j];
      }
    }
    tableroActual += '\n';
  }  

  return tableroActual;
}

const esJugadaValida = (x, y, tablero) => {
  return tablero[y] !== undefined && tablero[y][x] !== undefined && tablero[y][x] !== '💨';
}

const contarElemento = (elemento, tablero) => {
  let cantidad = 0;
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === elemento) {
        cantidad++;
      }
    }
  }
  return cantidad;
}

const hayCajas = (tablero) => {
  return contarElemento('📦', tablero) > 0;
}

const bombaExploto = (tablero) => {
  return contarElemento('💥', tablero) > 0;
}

const juegoTermino = (tablero) => {
  return !hayCajas(tablero) || bombaExploto(tablero);
}

const casillaContiene = (elemento, x, y, tablero) => {
  return esJugadaValida(x, y, tablero) && tablero[y][x] === elemento;
}

const obtenerCoodernadas = (mensaje, tablero) => {
  const tableroActual = obtenerTableroActual(tablero);
  const jugada = prompt(`${mensaje}\n${tableroActual}`);
  return jugada.split(' ');
}

const jugar = (tablero) => {
  const coordenadas = obtenerCoodernadas('Ingrese las coordenadas x e y separadas por espacio, por ejemplo: 0 1', tablero);
  const x = coordenadas[0];
  const y = coordenadas[1];
  
  if (casillaContiene('📦', x, y, tablero)) {
    alert('¡Casilla vacía!¡Te has salvado!');
    tablero[y][x] = '💨';
  } else if (casillaContiene('💣', x, y, tablero)) {
    tablero[y][x] = '💥';
  } else {
    alert('Esa no es una jugada válida');
  }
}

const mostrarResultadoFinal = (tablero) => {
  const tableroFinal = obtenerTableroActual(tablero, false);

  if (!hayCajas(tablero)) {
    alert('¡Felicitaciones! Has ganado.\n' + tableroFinal);
  }
  
  if (bombaExploto(tablero)) {
    alert('¡Oh no!¡Era una bomba!¡Has perdido!\n' + tableroFinal);
  }
}

const iniciarJuego = (tablero) => {
  while(!juegoTermino(tablero)) {
    jugar(tablero);
  }
  mostrarResultadoFinal(tablero);
}

const tablero = 
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
];

iniciarJuego(tablero);

