class Logger {
  #mensajes = []

  loguear = (mensaje) => {
    this.#mensajes.push(mensaje)
    console.log(mensaje)
  }

  obtenerMensajes = () => this.#mensajes
}
