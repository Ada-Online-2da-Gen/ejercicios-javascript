// Usuarios
const jose = new Usuario('Jose')
const lu = new Usuario('Lu')
const flor = new Usuario('Flor')

// Subreddits
const subCoronavirus = new Subreddit(
  'coronavirus',
  'Subreddit sobre noticias de coronavirus'
)

// Posts
const post = new Post(
  jose,
  'Casos en Argentina',
  'La cantidad de casos se incrementó blabla'
)

const comentarioFlor = new Comentario(flor, 'Muy buen post')
const comentarioLu = new Comentario(lu, 'Genial data!')

const respuestaJo = new Comentario(jose, 'Gracias!')

comentarioFlor.agregarComentario(respuestaJo)

post.agregarComentario(comentarioFlor)
post.agregarComentario(comentarioLu)

subCoronavirus.agregarPost(post)

console.log(subCoronavirus)

// const reddit = new reddit()
// const usuarioFlor = reddit.obtenerUsuario('flor')

// const subCovid = reddit.buscarSubreddit('coronavirus')
// const comentarios = subCovid.filtraComentariosPorUsuario(usuarioFlor)

// - Operaciones CRUD comunes
// - Agregar nueva entidad
// - Modificar entidad existente
// - Eliminar entidad existente
// - Obtener entidad existe, por id, por propiedad
// - Obtener todas las entidades
// - Filtrar entidades (por alguna propiedades)
