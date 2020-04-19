// Clases abstractas

class Monstruo extends Personaje {
  constructor(nombre, vida, ataque, imagen) {
    super(nombre, vida, ataque)
    this.imagen = imagen

    if (this.constructor === Monstruo) {
      throw new Error('No se puede instanciar la clase Monstruo')
    }
  }
  // metodo abstracto
  grunir = () => {
    throw new Error('Método grunir no implementado')
  }
}

class Serpiente extends Monstruo {
  constructor() {
    super('Serpiente gigante', 5, 2, 'Colossal Snake.png')
  }
  grunir = () => 'Ssssszzzz'
}

class GolemRoca extends Monstruo {
  constructor() {
    super('Golem de Roca', 5, 2, 'Earth Rock Golem.png')
  }
  grunir = () => 'Gggggrrwwwll'
}

class PlantaCarnivora extends Monstruo {
  constructor() {
    super('Planta Carnívora', 5, 2, 'Toxic Carnivorous Plant C.png')
  }
  grunir = () => 'Rack rack rack'
}
