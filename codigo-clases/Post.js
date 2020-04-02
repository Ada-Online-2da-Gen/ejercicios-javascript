// Post
// - id
// - fecha
// - titulo
// - contenido
// - usuario
// - comentarios
// - votos (Voto[])

class Post {
  #id
  #fecha
  #titulo
  #contenido
  #usuario
  #comentarios = []
  #votos = []
  constructor(usuario, titulo, contenido) {
    this.#usuario = usuario
    this.#titulo = titulo
    this.#contenido = contenido

    this.#id = uuidv4()
    this.#fecha = new Date()
  }
  agregarComentario = comentario => {
    this.#comentarios.push(comentario)
  }
}
