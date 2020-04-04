class Heroe extends Personaje {
  constructor(nombre, vida, ataque) {
    super(nombre, vida, ataque)
    this.inventario = []
    this.vidaMaxima = 200
  }
}
