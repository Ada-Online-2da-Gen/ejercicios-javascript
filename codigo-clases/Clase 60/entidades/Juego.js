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
    this.historial = []
    this.area = new Area(this.heroe, this.monstruos, this.loguear)
  }

  loguear = (mensaje) => {
    this.historial.push(mensaje)
    console.log(mensaje)
  }

  juegoEstaTerminado = () => {
    return !this.heroe.tieneVida()
  }

  puedeEjecutarAccion = (accion) => {
    return !this.juegoEstaTerminado() || accion === ACCION.REINICIAR
  }

  ejecutar = (accion) => {
    if (!this.puedeEjecutarAccion(accion)) {
      this.loguear('El juego terminó, tenés que reiniciarlo')
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
    this.loguear('Nuevo juego comenzado')
  }

  #utilizarItem = () => {
    if (!this.heroe.inventario.tieneItems()) {
      return this.loguear('No tienes items que utilizar')
    }

    this.heroe.utilizarItem()
    this.loguear('Has utilizado un item')
  }
}
