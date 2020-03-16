const colores = ['rojo', 'azul', 'amarillo', 'verde'];
const secuencia = [];

let juegoTerminado = false;

while(!juegoTerminado) {
  // Obtengo un color aleatorio
  const random = Math.round(Math.random() * (colores.length - 1));
  const color = colores[random];
  
  // Lo agrego a la secuencia
  secuencia.push(color);
  
  // Muestro la ronda y la secuencia actual (la ronda es la cantidad de colores en la secuencia)
  alert(`Ronda ${secuencia.length}. La secuencia actual es: ${secuencia}`);
  
  for(let i = 0; i < secuencia.length; i++) {
      if (!juegoTerminado) {
        const jugada = prompt(`Ingrese un color (${colores}):`);
        if (jugada !== secuencia[i]) {
          juegoTerminado = true;
        }
      }
  }
}

alert(`¡Le has errado! Has sobrevivido ${secuencia.length} rondas`);
