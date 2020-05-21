
# Estilando componentes con Sass

## Consignas

1. Crear la siguiente carpeta dentro de src

```
src
└── styles
    ├── base
    |     └── _reset.scss   // para remover estilos generales
    ├── variables
    |     ├── _colors.scss  // variables de colores
    |     ├── _text.scss
    |     └── etc
    ├── mixins
    |     ├── _colors.scss  // mixins para incluir propiedades de colores
    |     ├── _helpers.scss // mixins generales
    |     └── etc
    ├── functions
    |     ├── _colors.scss  // funciones para trabajar con colores
    |     ├── _helpers.scss // funciones generales
    |     └── etc 
    └── main.scss 
```

2. En `main.scss` importar el resto de los archivos parciales, e importarlo en index.js

3. Todos los estilos deben estar guardados en sus respectivas variables ($colors, $text, $spacing, etc), p. ej.:

```scss
$colors: (
  primary: #3366FF,
  default: #F7F9FC,
  success: #38C44B,
  error: #FF3B2D,
  info: #49A2FC,
  // etc
)
```

No asignar nunca un valor directamente a una propiedad

3. No se preocupen por nombres y valores exactos de variables y propiedades, ya los iremos puliendo en las próximas clases
4. Hacer funciones para acceder a los valores de los maps (getColor, getText, etc)
5. Devolver un error con mensaje adecuado si el valor accedido no existe
6. Hacer una función para no repetir tanto código en código 3
7. Hacer mixins para incluir las propiedades respectivas, p. ej.:

```scss
h1 {
  @include fontSize('lg');
  @include color('text');
}
```
<br>

## Crear los siguientes componentes

Todos los componentes deben extender las props por default de React

### `Icon`

- Props
  - name
  - size
  - color

Este componente va a tener una serie de íconos ya definidos, por lo que vamos a definir el ícono que queremos utilizar usando un string. Para esto, vamos a usar un enum, de la siguiente forma:

```jsx
import { FaHome, FaHeart } from 'react-icons/fa'

const ICONS = {
  home: FaHome,
  heart: FaHeart
}
```

Si accedemos a una propiedad de `Icons` y lo guardamos en una variable en PascalCase, podemos usarla como componente, p. ej.:

```jsx
const SelectedIcon = ICONS.home
<SelectedIcon />
```

### `Button`

- Debe renderizar un componente `button`
- Props
  - iconLeft (nombre de ícono)
  - iconRight (nombre de ícono)
  - variant: primary, default, success, danger, info (default: default)
  - roundend (para border-radius)
  - children (el texto dentro del botón)

### `Tag`

- Debe renderizar un componente `span`
- Props
  - color
  - size
  - rounded
  - children (el texto dentro del span)

### `Title`

- Debe renderizar un elemento h1-h6
- Props
  - as (h1-h6, define qué elemento renderiza)
  - color
  - align: left, right, center (default: left)
  - children: el texto a incluir en el elemento p 

### `Text`

- Debe renderizar un elemento p
- Props
  - size
  - color
  - align: left, right, center (default: left)
  - children: el texto a incluir en el elemento p 

### `Flex`

- Debe renderizar un componente `div`
- Debe ser un contener flexible
- Otros nombres comunes son `Container` o `Stack` (por si quieren cambiarlo)
- Debe aceptar componentes dentro suyo
- Props
  - direction: horizontal, vertical (default: horizontal) (corresponde a la propiedad flex-direction)
  - justify: left, center, right (corresponde a la propiedad justify-content)
  
## Desafío

Dada un componente con una prop que coincida con algún estilo mapeado (por ejemplo, colores) generar sus variantes dinámicamente, es decir, que pueda usar todas las del mapa sin tener que estar declarando cada clase por separado, p. ej. si tenemos el map:

```scss
$colors {
  primary: red,
  secondary: green,
  tertiary: blue
}
```

Deberíamos poder usar dichos valores en cualquier componente donde usemos alguna propiedad que utilice color, p. ej.:

```jsx
<Text color="primary">Soy un texto rojo</Text>
```

Lo que *no* deberíamos tener que hacer es algo como:

```scss
.text {
  &.primary {
    map-get($colors, 'primary');
  }
  &.secondary {
    map-get($colors, 'secondary')
  }
  &.tertiary {
    map-get($colors, 'tertiary')
  }
}
```

Porque de esta forma cada vez que cambiamos algo en `$colors` tendríamos que cambiarlo en `.text` (y en todo otro lado), además de que se duplica mucho código y el código se vuelve inmantenible y propenso a bugs.

La idea es generar reglas como la anterior de forma dinámica a partir del map. Usar para eso mixins, el selector &, `@each` y interpolación. 

Recuerden que los estilos de los componentes se usan con módulos, por lo que en `text.module.scss` vamos a tener que importar `styles/main.scss` para acceder a todas las variables, mixins y funciones que tengamos

Como tip, el componente que tendríamos sería algo asi:

```jsx
import styles from 'component.module.scss'

const Component = ({size}) => {
  return <div className={styles[`size-${size}`]} />
}
```
