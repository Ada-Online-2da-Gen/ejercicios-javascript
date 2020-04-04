// Si la heroe llega a 0, el juego debería avisar que terminó y no debería dejar atacar
// Si el monstruo llega a 0, debería avisar que lo matamos y debería generar uno nuevo

class Juego {
  constructor(heroe, monstruos) {
    this.heroe = heroe
    this.monstruos = monstruos
    this.monstruo = this.generarMonstruo()
  }
  generarMonstruo = () => {
    const i = Math.round(Math.random() * (this.monstruos.length - 1))
    const monstruo = new this.monstruos[i]()
    console.log('Ha aparecido un ' + monstruo.nombre)
    console.log('Monstruo dice: ' + monstruo.grunir())
    return monstruo
  }
  atacar = () => {
    const { heroe, monstruo } = this

    if (monstruo.tieneVida() && heroe.tieneVida()) {
      monstruo.restarVida(heroe.ataque)
      heroe.restarVida(monstruo.ataque)
      console.log('Atacas a ' + monstruo.nombre)
    }
    if (!monstruo.tieneVida() && heroe.tieneVida()) {
      console.log('Mataste a ' + monstruo.nombre)
      this.monstruo = this.generarMonstruo()
    }
    if (!heroe.tieneVida()) {
      console.log('Te moriste!')
    }
  }
}
