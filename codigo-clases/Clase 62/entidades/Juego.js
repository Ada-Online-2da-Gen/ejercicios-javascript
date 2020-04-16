// Si la heroe llega a 0, el juego debería avisar que terminó y no debería dejar atacar
// Si el monstruo llega a 0, debería avisar que lo matamos y debería generar uno nuevo

// enums -> objetos de configuracion

const ACCION = {
  ATACAR: 'atacar',
  INVESTIGAR: 'investigar',
  REINICIAR: 'reiniciar',
  USAR_ITEM: 'usar item',
}

class Juego {
  constructor(heroe, monstruos) {
    this.heroe = heroe
    this.monstruos = monstruos
    this.logger = new Logger()
    this.vista = new Vista(this)
    this.area = new Area(this.heroe, this.monstruos, this.logger, this.vista)

    this.vista.actualizarVida(heroe.vida, heroe.vidaMaxima)
  }

  juegoEstaTerminado = () => {
    return !this.heroe.tieneVida()
  }

  puedeEjecutarAccion = (accion) => {
    return !this.juegoEstaTerminado() || accion === ACCION.REINICIAR
  }

  ejecutar = (accion) => {
    this.ejecutarAccion(accion)
    this.actualizarMensajes()
  }

  ejecutarAccion = (accion) => {
    if (!this.puedeEjecutarAccion(accion)) {
      this.logger.loguear('El juego terminó, tenés que reiniciarlo')
      return
    }

    const acciones = {
      [ACCION.REINICIAR]: this.#reiniciar,
      [ACCION.ATACAR]: this.#atacar,
      [ACCION.INVESTIGAR]: this.#investigar,
      [ACCION.USAR_ITEM]: this.#utilizarItem,
    }

    acciones[accion]()
  }

  actualizarMensajes = () => {
    const mensajes = this.logger.obtenerMensajes()
    this.vista.actualizarMensajes(mensajes)
  }

  // !
  obtenerMonstruo = () => {
    return this.area.monstruo
  }

  #investigar = () => {
    this.area.investigar()
  }

  #atacar = () => {
    this.area.combatir()
  }

  #reiniciar = () => {
    this.historial = []
    this.heroe = this.heroe.clonar()
    this.area = new Area(this.heroe, this.monstruos, this.loguear)
    this.logger.loguear('Nuevo juego comenzado')
  }

  #utilizarItem = () => {
    if (!this.heroe.inventario.tieneItems()) {
      return this.logger.loguear('No tienes items que utilizar')
    }

    this.heroe.utilizarItem()
    this.logger.loguear('Has utilizado un item')
  }
}
