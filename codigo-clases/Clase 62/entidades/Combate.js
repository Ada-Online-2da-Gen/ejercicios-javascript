class Combate {
  constructor(heroe, monstruo, logger) {
    this.heroe = heroe
    this.monstruo = monstruo
    this.logger = logger
  }
  puedeCombatir = () => {
    return this.monstruo.tieneVida() && this.heroe.tieneVida()
  }
  combatir = () => {
    this.monstruo.restarVida(this.heroe.ataque)
    this.heroe.restarVida(this.monstruo.ataque)
  }
  heroeMatoMonstruo = () => {
    return !this.monstruo.tieneVida() && this.heroe.tieneVida()
  }
}
