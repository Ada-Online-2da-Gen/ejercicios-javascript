const tablero = 
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
];

let cajasRestantes = 0;
let juegoTerminado = false;
// Obtengo la cantidad de cajas al inicio de la partida

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    if (tablero[i][j] === '📦') {
      cajasRestantes++;
    }
  }
}

// Bucle del juego

while(cajasRestantes > 0 && !juegoTerminado) {
  const jugada = prompt('Ingrese las coordenadas x e y separadas por espacio, por ejemplo: 0 1');
  
  const coordenadas = jugada.split(' ');
  const x = coordenadas[0];
  const y = coordenadas[1];
  
  if (tablero[y][x] === '📦') {
    alert('¡Casilla vacía!¡Te has salvado!');
    tablero[y][x] = '💨';
    cajasRestantes--;
  } else if (tablero[y][x] === '💣') {
    alert('¡Oh no!¡Era una bomba!¡Has perdido!');
    tablero[y][x] = '💥';
    juegoTerminado = true;
  } else {
    alert('Esa no es una jugada válida');
  }
  
  if (cajasRestantes === 0) {
    alert('¡Felicitaciones! Has ganado.')
  }
  
  // Muestro el tablero
  let tableroActual = '';
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      tableroActual += tablero[i][j];
    }
    tableroActual += '\n';
  }
}
