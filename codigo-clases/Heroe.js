class Heroe extends Personaje {
  constructor(nombre, vida, ataque) {
    super(nombre, vida, ataque)
    this.inventario = []
    this.vidaMaxima = 200
  }
  clonar = () => {
    return new Heroe(
      this.heroe.nombre,
      this.heroe.vidaMaxima,
      this.heroe.ataque
    )
  }
}
