// Encapsulamiento -> getters, setters, propiedades y metodos privados
// Herencia -> clases pueden heredar metodos y propiedades de otras
// Abstracción
// Polimorfismo -> clases pueden implementar metodos heredados de forma distinta

const heroe = new Heroe('Xena', 50, 3)
const monstruos = [Serpiente, GolemRoca, PlantaCarnivora]

window.onload = () => new Juego(heroe, monstruos)
