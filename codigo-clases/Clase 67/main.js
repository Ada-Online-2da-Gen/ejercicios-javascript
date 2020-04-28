const root = document.getElementById('root')
const e = React.createElement
// React.createElement(tipo, props, children)
const hoy = new Date()

const Titulo = () => {
  return e('h1', null, 'Hola React!')
}

const Subtitulo = () => {
  return e('h2', null, 'Probando cosas nuevas!')
}

const fecha = e('small', null, hoy.toString())
const contenido = e('p', null, 'Soy un comentario')

// Componente primitivos
// h1-h6, div, section, p...

// Componente funcional
// En PascalCase
// Devolver un elemento de React con React.createElement
const Comentario = () => {
  return e('article', null, [contenido, fecha])
}

const Comentarios = () => {
  return e('section', null, [e(Comentario), e(Comentario)])
}

const App = () => {
  return e('main', null, [e(Titulo), e(Subtitulo), e(Comentarios)])
}

ReactDOM.render(e(App), root)

/**
<main>
  <h1>Hola React</h1>
  <h2>Probando cosas nuevas!</h2>
  <section>
    <p>Soy un comentario</p>
    <p>Soy un comentario</p>
  </section>
</main>
 */
// const app = e('main', null, [
//   e('h1', null, 'Hola React!'),
//   e('h2', null, 'Probando cosas nuevas!'),
//   e('section', null, [
//     e('p', null, 'Soy un comentario'),
//     e('p', null, 'Soy un comentario'),
//   ]),
// ])
