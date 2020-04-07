// Clases abstractas

class Monstruo extends Personaje {
  constructor(nombre, vida, ataque) {
    super(nombre, vida, ataque)

    if (this.constructor === Monstruo) {
      throw new Error('No se puede instanciar la clase Monstruo')
    }
  }
  // metodo abstracto
  grunir = () => {
    throw new Error('Método grunir no implementado')
  }
}

class Orco extends Monstruo {
  constructor() {
    super('Orco', 10, 2)
  }
  grunir = () => 'Grrrr'
}

class Troll extends Monstruo {
  constructor() {
    super('Troll', 15, 4)
  }
  grunir = () => 'Grooooowllll'
}

class Rata extends Monstruo {
  constructor() {
    super('Rata', 2, 1)
  }
  grunir = () => 'Chriiiichh'
}

class Lobo extends Monstruo {
  constructor() {
    super('Lobo', 5, 2)
  }
  grunir = () => 'Auuuuuuu'
}
