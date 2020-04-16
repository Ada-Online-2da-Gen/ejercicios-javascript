class Inventario {
  #items = []

  constructor(capacidad) {
    this.capacidad = capacidad
  }

  tieneItems = () => {
    return this.#items.length > 0
  }

  estaLleno = () => this.#items.length === this.capacidad

  agregarItem = (item) => {
    this.#items.push(item)
  }

  obtenerItem = () => {
    return this.#items.pop()
  }
}
