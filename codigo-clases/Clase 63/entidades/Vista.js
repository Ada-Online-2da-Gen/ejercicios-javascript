const $ = (elem) => document.querySelector(elem)

class Vista {
  constructor(centralMensajes) {
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

    this.inventario = $('#inventory')

    this.centralMensajes = centralMensajes

    this.subscribirse()
    this.inicializar()

    this.imagenMonstruo.addEventListener('click', (evento) => {
      console.log('Monstruo clickeado')
    })

    // event bubbling

    this.imagenArea.addEventListener('click', (evento) => {
      evento.stopPropagation()
      console.log('Area clickeada')
    })

    document.body.addEventListener('click', () => console.log('Body clickeado'))
  }

  subscribirse = () => {
    this.centralMensajes.subscribir(
      'MENSAJES_ACTUALIZADOS',
      this.actualizarMensajes
    )
    this.centralMensajes.subscribir('VIDA_ACTUALIZADA', this.actualizarVida)
    this.centralMensajes.subscribir(
      'MONSTRUO_APARECIDO',
      this.actualizarMonstruo
    )
    this.centralMensajes.subscribir('MONSTRUO_ATACADO', this.atacarMonstruo)
    this.centralMensajes.subscribir(
      'MONSTRUO_DERROTADO',
      this.desaparecerMonstruo
    )
  }

  inicializar = () => {
    // Agrego event listeners
    this.botonAtacar.addEventListener('click', () =>
      this.centralMensajes.enviar('ACCION_EJECUTADA', ACCION.ATACAR)
    )
    this.botonExplorar.addEventListener('click', () =>
      this.centralMensajes.enviar('ACCION_EJECUTADA', ACCION.INVESTIGAR)
    )
    this.imagenMonstruo.addEventListener('animationend', () =>
      this.imagenMonstruo.classList.remove('attacked')
    )
    this.inventario.addEventListener('mousedown', this.moverInventario)
  }

  moverInventario = (evento) => {
    const inventario = evento.target
    const diferenciaX = evento.pageX - inventario.getBoundingClientRect().x
    const diferenciaY = evento.pageY - inventario.getBoundingClientRect().y

    const mover = (evento) => {
      inventario.style.top = `${evento.pageY - diferenciaY}px`
      inventario.style.left = `${evento.pageX - diferenciaX}px`
    }

    inventario.addEventListener('mousemove', mover)

    inventario.addEventListener('mouseup', () => {
      inventario.removeEventListener('mousemove', mover)
    })
  }

  actualizarMensajes = (mensajes) => {
    this.historial.innerHTML = ''

    for (let mensaje of mensajes) {
      this.historial.innerHTML += `<p><span>${mensaje}<span></p>`
    }

    this.historial.scrollTop = this.historial.scrollHeight
  }

  actualizarMonstruo = (imagen) => {
    this.imagenMonstruo.style.opacity = 1
    this.imagenMonstruo.src = `assets/monsters/${imagen}`
  }

  desaparecerMonstruo = () => {
    this.imagenMonstruo.style.opacity = 0
  }

  atacarMonstruo = () => {
    this.imagenMonstruo.classList.add('attacked')
  }

  actualizarVida = (actual, maximo) => {
    this.statHP.innerHTML = `HP ${actual}/${maximo}`
    this.barraHP.style.width = `${(actual * 100) / maximo}%`
  }
}
