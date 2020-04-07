// Si la heroe llega a 0, el juego debería avisar que terminó y no debería dejar atacar
// Si el monstruo llega a 0, debería avisar que lo matamos y debería generar uno nuevo

// enums -> objetos de configuracion

const ACCION = {
  ATACAR: 'atacar',
  INVESTIGAR: 'investigar',
  REINICIAR: 'reiniciar',
}

class Juego {
  constructor(heroe, monstruos) {
    this.heroe = heroe
    this.monstruos = monstruos
    this.monstruo = this.generarMonstruo()
    this.historial = []
    this.combate = new Combate(this.heroe, this.monstruo)
  }
  generarMonstruo = () => {
    const i = Math.round(Math.random() * (this.monstruos.length - 1))
    const monstruo = new this.monstruos[i]()
    return monstruo
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
    if (accion === ACCION.REINICIAR) {
      this.#reiniciar()
    }
    if (accion === ACCION.ATACAR) {
      this.#atacar()
    }
    if (accion === ACCION.INVESTIGAR) {
      this.#investigar()
    }
  }
  #reiniciar = () => {
    this.historial = []
    this.heroe = this.heroe.clonar()
    this.monstruo = this.generarMonstruo()
    this.combate = new Combate(this.heroe, this.monstruo)
    this.loguear('Nuevo juego comenzado')
  }
  #investigar = () => {
    if (this.monstruo.tieneVida()) {
      this.loguear('No puedes investigar! Hay un monstruo!')
      return
    }

    this.monstruo = this.generarMonstruo()
    this.combate = new Combate(this.heroe, this.monstruo)

    this.loguear('Ha aparecido un ' + this.monstruo.nombre)
    this.loguear('Monstruo dice: ' + this.monstruo.grunir())
  }
  #atacar = () => {
    const { combate, loguear, monstruo, heroe } = this

    if (!combate.puedeCombatir()) {
      loguear('No podés atacar, no hay ningún monstruo!')
      return
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
