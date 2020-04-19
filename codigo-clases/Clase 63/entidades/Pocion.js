class Pocion {
  #nombre = "Poción"
  
  obtenerNombre = () => {
    return this.#nombre
  }

  utilizar = objetivo => {
    objetivo.sumarVida(10)
  }
}