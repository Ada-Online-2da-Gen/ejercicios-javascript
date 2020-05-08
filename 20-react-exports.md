# Create React App

## Blog

Crear los componentes para armar la estructura de un blog, poniendo cada componente en un archivo separado e importándolos donde corresponda. Pueden usar componentes del ejercicio anterior.

### Header

- Crear un componente `Header` que renderice un elemento `header` y que pueda contener componente dentro suyo

### NavMenu

- Crear un componente `Nav` que renderice un elemento `nav` y un elemento `ul` dentro del nav, el componente debe poder contener elementos dentro suyo
- El elemento `ul` debe tener el estilo `display: flex` y `list-style: none`
- El componente `NavMenu` debe aceptar la prop `direction` con los valores `"row"` o `"column"`, siendo `"row"` el valor por defecto, y cambiar el valor de la propiedad `flex-direction` del elemento `ul` en consecuencia

### NavItem

- Crear un componente `MenuItem` que renderice un componente `li` con un componente `a`, el componente debe poder contener elementos dentro suyo
- El elemento `li` debe tener el estilo `display: flex`
- Debe aceptar la prop `path` que corresponde al atributo `href` del componente `a`

### UserControl

- Crear un componente UserControl que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente `p` que diga `Hola ${user}` y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes `a`, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: `GuestUserMessage` (para cuando user no tiene ningún valor) y `LoggedUserMessage`

### BlogArticle

- Crear un componente `BlogArticle` que renderice un componente `main` y que pueda contener componente dentro suyo

### BlogImage

- Crear un componente `BlogImage` que tome una prop `img` (un string) renderice un componente `img` donde `src` contiene el valor de `img`

### BlogTitle

- Crear un componente `BlogTitle` que renderice un componente `h1` y que pueda contener texto dentro suyo

### BlogContent

- Crear un componente `BlogContent` que renderice un componente `p` y que pueda contener texto dentro suyo

### Comments

- Crear un componente `Comments` que tome como prop `comments` un array de objetos, y renderice 
  - un componente `section`
  - un componente `h2`, dentro de `section` que tenga como texto 'Comentarios'
  - por cada ítem de `comments`, generar un componente `Comment` con `CommentUser` y `CommentContent` dentro suyo
  
### Comment

- Crear un componente `Comment` que renderice un componente `article` y que pueda contener componentes dentro suyo

### CommentUser

- Crear un componente `CommentUser` que renderice un componente `h3` y que pueda contener texto dentro suyo

### CommentContent

- Crear un componente `CommentContent` que renderice un componente `p` y que pueda contener texto dentro suyo
  
### Footer

- Crear un componente `Footer` que renderice un componente `footer` y que pueda contener componente dentro suyo


Crear un layout usando los componentes anteriores, de la siguiente forma:

```jsx

const comments = [{
  user: 'Grace Hopper',
  comment: 'Genial artículo!
}, {
  user: 'Hedy Lamarr',
  comment: 'Muy bueno! Gracias por compartir'
}]


<Header>
  <NavMenu>
    <NavItem path='/home'>Home</NavItem>
    <NavItem path='/about-us'>Sobre mí</NavItem>
    <NavItem path='/contact'>Artículos</NavItem>
  </Menu>
  <UserControl user="Ada" />
</Header>
<BlogArticle>
  <BlogImage img="imagen.jpg" />
  <BlogTitle>Cómo hacer un proyecto en React</BlogTitle>
  <BlogContent>Lorem ipsum...</BlogContent>
</BlogArticle>
<Comments comments={comments} />
<Footer>® 2020 - All rights reserved</Footer>
```
