# React - JSX

## Card

- Crear un componente `Card` que renderice un elemento `article` y que pueda contener componentes dentro suyo
- Crear un componente `CardTitle` que renderice un elemento `h3` y que pueda contener texto dentro suyo
- Crear un componente `CardDescription` que renderice un elemento `p` y que pueda contener texto dentro suyo
- Crear un componente `CardActions` que renderice un elemento `div` y que pueda contener componentes dentro suyo. Dicho div debe contener la propiedad `display: flex`
- Crear un componente `CardAction` que renderice un elemento `button` y que pueda contener texto dentro suyo

## Layout

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

### Main

- Crear un componente `Main` que renderice un componente `main` y que pueda contener componente dentro suyo

### Footer

- Crear un componente `Footer` que renderice un componente `footer` y que pueda contener componente dentro suyo


Crear un layout usando los componentes anteriores, de la siguiente forma:

```jsx
<Header>
  <NavMenu>
    <NavItem path='/home'>Home</NavItem>
    <NavItem path='/about-us'>About Us</NavItem>
    <NavItem path='/contact'>Contact</NavItem>
  </Menu>
</Header>
<Main>
  Hola mundo
</Main>
<Footer>® 2020 - All rights reserved</Footer>
```

## Renderizado condicional y Listas de componentes

### UserGreeting

- Crear un componente `UserGreeting` que acepte una prop `user` (que es un string). Si `user` tiene algún valor, debe renderizar un componente `p` que diga `Welcome ${user}` y un componente `a` que diga `Logout`, en cambio si `user` no tiene ningún valor, debe mostrar dos componentes `a`, uno que diga `Login` y otro `Register`. Separar luego ambas opciones en dos componentes distintos: `GuestUserMessage` (para cuando `user` no tiene ningún valor) y `LoggedUserMessage`,

### List

- Crear un componente `List` que acepte una prop `items` que sea un array de strings, y renderice un componente `ul` con componentes `li` por cada string de `items`. Si `items` está vacío o no está definido, se debe mostrar un componente `p` que diga `Sorry, this list is empty`

### Field

- Crear un componente `PasswordField` que acepte una prop `status` que es un string con los valores posibles: "default", "error", "valid". El componente `Field` debe renderizar un `label` que diga "Password" y un `input` de tipo `password`. Si `status` tiene el valor "valid", debe mostrar el input con un borde de color verde. Si tiene el valor "error", debe mostrar el input con un borde de color rojo y renderizar debajo del input un componente `small` en color rojo que diga: "Invalid password, please try again"
