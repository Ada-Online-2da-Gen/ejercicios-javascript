const tablero = 
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
];

let cajasRestantes = 0;
let escogeBomba = false;

// Obtengo la cantidad de cajas al inicio de la partida

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    if (tablero[i][j] === '📦') {
      cajasRestantes++;
    }
  }
}

// Bucle del juego

while(cajasRestantes > 0 && !escogeBomba) {
  // Obtengo el tablero, recorriéndolo y concatenándolo en un string

  let tableroActual = '';
  
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      // Si es una bomba muestro una caja, sino lo que haya en esa casilla
      tableroActual += tablero[i][j] === '💣' ? '📦' : tablero[i][j];
    }
    // Por cada fila inserto una nueva línea
    tableroActual += '\n';
  }  
  
  const jugada = prompt(`Ingrese las coordenadas x e y separadas por espacio, por ejemplo: 0 1 \n${tableroActual}`);
  
  const coordenadas = jugada.split(' ');
  const x = coordenadas[0];
  const y = coordenadas[1];
  
  const jugadaValida = tablero[y] !== undefined && tablero[y][x] !== undefined && tablero[y][x] !== '💨';
  
  if (jugadaValida && tablero[y][x] === '📦') {
    alert('¡Casilla vacía!¡Te has salvado!');
    tablero[y][x] = '💨';
    cajasRestantes--;
  } 

  if (jugadaValida && tablero[y][x] === '💣') {
    tablero[y][x] = '💥';
    escogeBomba = true;
  } 
  
  if (!jugadaValida) {
    alert('Esa no es una jugada válida');
  }
}

// Muestro el tablero finalizado con todo descubierto
let tableroFinal = '';

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    tableroFinal += tablero[i][j];
  }
  tableroFinal += '\n';
}

let resultadoFinal = '';

if (cajasRestantes === 0) {
  resultadoFinal = '¡Felicitaciones! Has ganado.\n'
}

if (escogeBomba) {
  resultadoFinal = '¡Oh no!¡Era una bomba!¡Has perdido!\n';
}

alert(resultadoFinal + tableroFinal);

