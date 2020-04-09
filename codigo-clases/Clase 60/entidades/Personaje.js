class Personaje {
  constructor(nombre, vida, ataque) {
    if (this.constructor === Personaje) {
      throw new Error('No se puede instanciar la clase Personaje')
    }

    this.nombre = nombre
    this.vida = vida
    this.vidaMaxima = vida
    this.ataque = ataque
  }

  tieneVida = () => this.vida > 0

  restarVida = (cantidad) => {
    this.vida -= cantidad

    if (this.vida < 0) {
      this.vida = 0
    }
  }
}
