let vidaJugadora = 75;
let vidaMonstruo = 100;
let pociones = 4;

const ataqueMaxJugadora = 35;
const ataqueMaxMonstruo = 25;
const curacionMaxPocion = 10;

let juegoTerminado = false;

while(!juegoTerminado) {

  // Muestro los stats actuales y pido por una acción

  const accion = prompt(`
  - Vida jugadora: ${vidaJugadora} 
  - Vida monstruo: ${vidaMonstruo} 
  - Pociones: ${pociones} 
  
  ¿Qué deseas hacer?
  - [A]TACAR MONSTRUO
  - TOMAR [P]OCION
  - [B]USCAR POCION
  - [S]ALIR
  `);
  
  // Ejecuto la acción elegida

  switch (accion) {
    // ---------------------------
    //    ATAQUE DEL MONSTRUO
    // ---------------------------    
    case 'A':
    case 'ATACAR MONSTRUO':
        const ataqueJugadora = Math.round(Math.random() * ataqueMaxJugadora) + 1;
        vidaMonstruo -= ataqueJugadora;
        alert(`Le sacas al monstruo ${ataqueJugadora} puntos de vida!`);
        break;

    // ---------------------------
    //       TOMA DE POCION
    // ---------------------------        
    case 'P':    
    case 'TOMAR POCION':
        const puntosDeCuracion = Math.round(Math.random() * curacionMaxPocion) + 10;
        vidaJugadora += puntosDeCuracion;
        pociones--;
        alert(`¡Te has curado ${puntosDeCuracion} puntos de salud!`);
        break;

    // ---------------------------
    //     BUSQUEDA DE POCION
    // ---------------------------
    case 'B':   
    case 'BUSCAR POCION':
        const exito = Math.floor(Math.random() * 4);
        if (exito === 1) {
            alert('¡Has encontrado una poción!');
            pociones++;
        } else {
            alert('No has encontrado nada');
        }
        break;
        
    default:
        alert('No puedes hacer eso. Inténtalo de nuevo.');
  }

  // ATAQUE DEL MONSTRUO
  
  if (!juegoTerminado) {
      const ataqueMonstruo = Math.round(Math.random() * ataqueMaxMonstruo) + 1;
      alert(`El monstruo te ataca y te saca ${ataqueMonstruo} puntos de vida!`);
      vidaJugadora -= ataqueMonstruo;
  }

  // Chequeo si el juego terminó
  
  if (vidaJugadora <= 0 || vidaMonstruo <= 0 || accion === 'SALIR' || accion === 'S') {
      juegoTerminado = true;
  }
}

// Muestro el resultado final

let resultado = '';

if (vidaJugadora <= 0) {
  resultado += 'El monstruo te ha matado! \n';
} else if (vidaMonstruo <= 0) {
  resultado += 'Has matado al monstruo! \n';
}

resultado += `  
  - Vida jugadora: ${vidaJugadora} 
  - Vida monstruo: ${vidaMonstruo} 
  - Pociones: ${pociones}
  
  ¡Gracias por jugar!
`;

alert(resultado);
