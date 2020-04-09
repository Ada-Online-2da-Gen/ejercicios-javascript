class Area {
  // Inyectamos loguear como dependencia
  constructor(heroe, monstruos, loguear) {
    this.heroe = heroe
    this.monstruos = monstruos
    this.monstruo = this.generarMonstruo()
    this.combate = new Combate(this.heroe, this.monstruo)

    // Dependencia
    this.loguear = loguear
  }

  generarMonstruo = () => {
    const i = Math.round(Math.random() * (this.monstruos.length - 1))
    const monstruo = new this.monstruos[i]()
    return monstruo
  }

  investigar = () => {
    if (this.monstruo.tieneVida()) {
      return this.loguear('No puedes investigar! Hay un monstruo!')
    }

    const random = Math.random()

    if (random < 0.4) {
      this.#encontrarItem()
    } else {
      this.#encontrarMonstruo()
    }
  }

  #encontrarItem = () => {
    if (this.heroe.inventario.estaLleno()) {
      return this.loguear('No tenes mas espacio!')
    }

    const item = new Pocion()
    this.heroe.inventario.agregarItem(item)
    this.loguear('Has encontrado ' + item.obtenerNombre())
  }

  #encontrarMonstruo = () => {
    this.monstruo = this.generarMonstruo()
    this.combate = new Combate(this.heroe, this.monstruo)

    this.loguear('Ha aparecido un ' + this.monstruo.nombre)
    this.loguear('Monstruo dice: ' + this.monstruo.grunir())
  }

  combatir = () => {
    const { combate, loguear, monstruo, heroe } = this

    if (!combate.puedeCombatir()) {
      return loguear('No podés atacar, no hay ningún monstruo!')
    }

    combate.combatir()
    loguear('Atacas a ' + monstruo.nombre)

    if (combate.heroeMatoMonstruo()) {
      loguear('Mataste a ' + monstruo.nombre)
    }
    if (!heroe.tieneVida()) {
      loguear('Te moriste! Reiniciá el juego para seguir jugando')
    }
  }
}
