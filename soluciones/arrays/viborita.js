Crear un programa que permita controlar una viborita.
El programa debe mostrar el tablero en todo momento.
Debe permitir ingresar las direcciones para donde desea mover la víbora: ARRIBA, DERECHA, ABAJO, IZQUIERDA, y moverla en consecuencia.
El objetivo es comer todas las manzanas, el juego termina cuando no hay más manzanas.
Para comer una manzana, debe moverse hacia ella.
Si la vibora llega esta en el borde del tablero, y se mueve hacia este, debe aparecer del otro lado del mismo.
Si se intenta avanzar a un casillero bloqueado (en el ejemplo, un ladrillo) no debe poder avanzar.
En vez de emojis se pueden usar letras.


const tablero = 
[
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
];


const bordeVerticalTablero = tablero.length - 1;
const bordeHorizontalTablero = tablero[0].length - 1;

let manzanasRestantes = 0;

// Obtengo la cantidad de manzanas al inicio de la partida

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    if (tablero[i][j] === '📦') {
      manzanasRestantes++;
    }
  }
}

while (manzanasRestantes > 0) {
  // Obtengo tablero actual
  
  let tableroActual = '';

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      tableroActual += tablero[i][j];
    }
    tableroActual += '\n';
  }

  const movimiento = prompt('Ingrese una opción para moverse: ARRIBA, DERECHA, ABAJO, IZQUIERDA\n' + tableroActual);
  
  let movimientoValido = true;
  
  let x = 0;
  let y = 0;
  
  switch(movimiento) {
    case 'ARRIBA':
      y = -1;
      x = 0;
      break;
    case 'DERECHA':
      y = 0;
      x = 1;
      break;     
    case 'ABAJO':
      y = 1;
      x = 0;   
      break;
    case 'IZQUIERDA':
      y = 0;
      x = -1;   
      break;
    default:
      movimientoValido = false;
  }
  
  if (movimientoValido) {
    // Obtengo posición de serpiente
    let posXSerpiente = 0;
    let posYSerpiente = 0;

    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero[i].length; j++) {
        if (tablero[i][j] === '🐍') {
          posXSerpiente = j;
          posYSerpiente = i;
        }
    }

    // Obtengo nueva futura posición en base a posición actual más movimiento

    let nuevaPosY = posYSerpiente + y;
    let nuevaPosX = posXSerpiente + x;
  
    // Actualizo nueva futura posición si está en los bordes
  
    if (nuevaPosY < 0) {
      nuevaPosY = bordeVerticalTablero;
    }
    if (nuevaPosY > bordeVerticalTablero) {
      nuevaPosY = 0;
    }
    if (nuevaPosX < 0) {
      nuevaPosX = bordeHorizontalTablero;
    }
    if (nuevaPosX > bordeHorizontalTablero) {
      nuevaPosX = 0;
    }

    // Si en la futura posición hay una manzana, resto uno a la cantidad de manzanas disponibles

    if (tablero[nuevaPosY][nuevaPosX] === '🍎') {
      manzanasDisponibles--;
    }
    
    // Si la futura posición no está bloqueada, actualizo el tablero

    if (tablero[nuevaPosY][nuevaPosX] !== '🧱') {
        tablero[posYSerpiente][posXSerpiente] = '🌱';
        tablero[nuevaPosY][nuevaPosX] = '🐍';
    } else {
      alert('¡Camino bloqueado!');
    }
  } else {
    alert('Por favor ingrese una opción correcta');
  }
}
