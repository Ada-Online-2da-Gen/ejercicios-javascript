class Area {
  // Inyectamos logger como dependencia
  constructor(heroe, monstruos, logger, centralMensajes) {
    this.heroe = heroe
    this.monstruos = monstruos

    // Dependencias
    this.logger = logger
    this.centralMensajes = centralMensajes

    this.#encontrarMonstruo()
  }

  generarMonstruo = () => {
    const i = Math.round(Math.random() * (this.monstruos.length - 1))
    const monstruo = new this.monstruos[i]()
    return monstruo
  }

  investigar = () => {
    if (this.monstruo.tieneVida()) {
      return this.logger.loguear('No puedes investigar! Hay un monstruo!')
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
      return this.logger.loguear('No tenes mas espacio!')
    }

    const item = new Pocion()
    this.heroe.inventario.agregarItem(item)
    this.logger.loguear('Has encontrado ' + item.obtenerNombre())
  }

  #encontrarMonstruo = () => {
    this.monstruo = this.generarMonstruo()
    this.combate = new Combate(this.heroe, this.monstruo)

    this.centralMensajes.enviar('MONSTRUO_APARECIDO', this.monstruo.imagen)

    this.logger.loguear('Ha aparecido un ' + this.monstruo.nombre)
    this.logger.loguear('Monstruo dice: ' + this.monstruo.grunir())
  }

  combatir = () => {
    const { combate, logger, monstruo, heroe } = this

    if (!combate.puedeCombatir()) {
      return logger.loguear('No podés atacar, no hay ningún monstruo!')
    }

    combate.combatir()

    logger.loguear(
      `Atacas a ${monstruo.nombre}! Le sacas ${heroe.ataque} HP! Le quedan ${monstruo.vida} HP`
    )

    logger.loguear(`${monstruo.nombre} te ataca! Te saca ${monstruo.ataque} HP`)

    if (combate.heroeMatoMonstruo()) {
      logger.loguear(`Mataste a ${monstruo.nombre}!`)
      this.centralMensajes.enviar('MONSTRUO_DERROTADO')
    }
    if (!heroe.tieneVida()) {
      logger.loguear('Te moriste! Reiniciá el juego para seguir jugando')
    }
  }
}
