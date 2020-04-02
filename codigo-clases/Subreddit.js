// Subreddit
// - id
// - nombre
// - descripcion
// - suscriptos
// - posts

class Subreddit {
  #id
  #nombre
  #descripcion
  #posts = []
  #suscriptos = []
  constructor(nombre, descripcion) {
    this.#nombre = nombre
    this.#descripcion = descripcion

    this.#id = uuidv4()
  }
  agregarPost = post => {
    this.#posts.push(post)
  }
}
