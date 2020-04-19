// Encapsulamiento -> getters, setters, propiedades y metodos privados
// Herencia -> clases pueden heredar metodos y propiedades de otras
// Abstracción
// Polimorfismo -> clases pueden implementar metodos heredados de forma distinta

const heroe = new Heroe('Xena', 50, 3)
const monstruos = [Serpiente, GolemRoca, PlantaCarnivora]

const centralMensajes = new CentralMensajes()

window.onload = () => {
  const vista = new Vista(centralMensajes)
  const juego = new Juego(heroe, monstruos, centralMensajes)
  console.log(vista)
}
