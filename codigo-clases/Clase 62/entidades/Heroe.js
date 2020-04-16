class Heroe extends Personaje {
  inventario = new Inventario()
  vidaMaxima = 50

  sumarVida = (cantidad) => {
    this.vida += cantidad
    if (this.vida > this.vidaMaxima) {
      this.vida = this.vidaMaxima
    }
  }

  utilizarItem = () => {
    const item = this.inventario.obtenerItem()
    if (item) {
      item.utilizar(this)
    }
  }

  clonar = () => {
    return new Heroe(this.nombre, this.vidaMaxima, this.ataque)
  }
}
