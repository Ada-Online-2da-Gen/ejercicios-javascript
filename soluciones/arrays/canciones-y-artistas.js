const canciones = [];
let programaFinalizado = false;

while(!programaFinalizado) {
  let opcion = prompt(`Ingrese una opción:
   - [A]GREGAR CANCION
   - [B]USCAR CANCIONES (por artista)
   - [L]ISTAR ARTISTAS
   - [S]ALIR
  `);
  
  switch(opcion) {
    case 'A':
    case 'AGREGAR CANCION':
      const ingreso = prompt('Ingrese una canción y el nombre de le artista, separado por coma');
      const cancion = ingreso.split(', ');
      canciones.push(cancion);
      break;
    case 'B':  
    case 'BUSCAR CANCIONES':
      const artista = prompt('Ingrese el nombre de une artista');
      let listaCanciones = `Canciones de ${artista}\n`;
      for (let i = 0; i < canciones.length; i++) {
        if (canciones[i][1] === artista) {
          listaCanciones += canciones[i][0] + '\n'; 
        } 
      }
      alert(listaCanciones);
      break;
    case 'L':  
    case 'LISTAR ARTISTAS':
      const artistas = [];
      let listaArtistas = 'Artistas: \n';
      // Recorro el array de canciones y obtengo el artista. Si el artista no se encuentra en el array artistas, lo agrego y         // concanteno su nombre
      for (let i = 0; i < canciones.length; i++) {
        if (artistas.indexOf(canciones[i][1]) === -1) {
          artistas.push(canciones[i][1]);
          listaArtistas += canciones[i][1] + '\n'; 
        }
      }
      alert(listaArtistas);
      break;
    case 'S':  
    case 'SALIR':
      const finaliza = confirm('Realmente desea finalizar el programa?');
      if (finaliza) {
        programaFinalizado = true;
      }
      alert('Gracias por usar nuestro programa');
      break;
    default:
      alert('Ingrese una opción correcta');
  } 
}
