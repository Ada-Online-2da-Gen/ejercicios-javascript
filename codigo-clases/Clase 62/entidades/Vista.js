const $ = (elem) => document.querySelector(elem)

class Vista {
  constructor(juego) {
    this.imagenMonstruo = $('#monster-img')
    this.nombreArea = $('#area-name')
    this.imagenArea = $('#area-bg')
    this.historial = $('#area-message')

    //
    this.barraHP = $('#hp-bar')
    this.statHP = $('#hp-stat')

    // Botones
    this.botonAtacar = $('#attack-btn')
    this.botonExplorar = $('#explore-btn')
    this.botonInventario = $('#inventory-btn')

    this.juego = juego

    this.inicializar()
  }

  inicializar = () => {
    // Agrego event listeners
    this.botonAtacar.addEventListener('click', () =>
      this.juego.ejecutar(ACCION.ATACAR)
    )
    this.botonExplorar.addEventListener('click', () =>
      this.juego.ejecutar(ACCION.INVESTIGAR)
    )
    this.imagenMonstruo.addEventListener('animationend', () =>
      this.imagenMonstruo.classList.remove('attacked')
    )
  }

  actualizarMensajes = (mensajes) => {
    this.historial.innerHTML = ''

    for (let mensaje of mensajes) {
      this.historial.innerHTML += `<p><span>${mensaje}<span></p>`
    }

    this.historial.scrollTop = this.historial.scrollHeight
  }

  actualizarMonstruo = (imagen) => {
    this.imagenMonstruo.src = `assets/monsters/${imagen}`
  }

  atacarMonstruo = () => {
    this.imagenMonstruo.classList.add('attacked')
  }

  actualizarVida = (actual, maximo) => {
    this.statHP.innerHTML = `HP ${actual}/${maximo}`
    this.barraHP.style.width = `${(actual * 100) / maximo}%`
  }
}
