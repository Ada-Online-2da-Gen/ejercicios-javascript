// Comentario
// - id
// - usuario
// - votos
// - fecha
// - contenido
// - comentarios

class Comentario {
  #id
  #usuario
  #fecha
  #contenido
  #votos = []
  #comentarios = []
  constructor(usuario, contenido) {
    this.#usuario = usuario
    this.#contenido = contenido

    this.#id = uuidv4()
    this.#fecha = new Date()
  }
  agregarComentario = comentario => {
    this.#comentarios.push(comentario)
  }
}
