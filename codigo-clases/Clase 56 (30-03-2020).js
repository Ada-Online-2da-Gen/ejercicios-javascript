// * imperativo -> if/else/else if, for/while, C
// * funcional -> elm, lisp,
// * OOP object oriented programing - programacion orientada a objetos
// * Java
// * PHP
// * C#

// * Clases

// * camelCase
// * PascalCase

// * Clase
// * Una función constructora
// * Propiedades
// * Métodos

// * Principio de única responsabilidad
// * Encapsulación

class Persona {
  // Propiedades o campos privados
  #nombreCompleto
  #nacimiento
  // Campo privado con valor inicial
  #dinero = 1000

  constructor(nombre, apellido, nacimiento) {
    // this representa la clase y nos permite acceder a sus propios métodos y propiedades
    this.#nombreCompleto = {
      nombre,
      apellido
    }
    this.#nacimiento = nacimiento
  }
  
  // Métodos privados
  #descontarImpuesto = monto => {
    return monto - 100
  }
  
  // Métodos públicos
  saludar = (saludo = 'Hola') => {
    return `${saludo}, soy ${this.#nombreCompleto.nombre}!`
  }
  trabajar = () => {
    this.#dinero += 100
  }
  
  // getters
  // permite obtener el valor de un campo privado
  obtenerNombreCompleto = () => {
    return { ...this.#nombreCompleto }
  }
  obtenerDinero = () => {
    const montoFinal = this.#descontarImpuesto(this.#dinero)
    return montoFinal
  }
  
  // setters
  // permite modificar el valor de un campo privado
  modificarDinero = monto => {
    if (monto > 0) {
      this.#dinero = monto
    }
  }
}

const ada = new Persona('Ada', 'Lovelace', new Date(1815, 11, 10))

ada.saludar()
