// Usuario
// - id
// - nombre
// - password
// - fechaDeRegistro
// - suscripciones
// - karma
// - avatar
// - mail

class Usuario {
  #id
  #nombre
  #password
  #fechaDeRegistro
  #suscripciones
  #avatar
  #mail
  #karma = 0
  constructor(nombre, password, mail, avatar) {
    this.#nombre = nombre
    this.#password = password
    this.#mail = mail
    this.#avatar = avatar

    this.#fechaDeRegistro = new Date()
    this.#id = uuidv4()
  }
}
