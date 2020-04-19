// EventListener
// Patron Observador - Observer

class CentralMensajes {
  #mensajes = {}

  subscribir = (mensaje, callback) => {
    this.#mensajes[mensaje] = [...(this.#mensajes[mensaje] || []), callback]
  }

  enviar = (mensaje, ...data) => {
    for (let callback of this.#mensajes[mensaje]) {
      callback(...data)
    }
  }
}
