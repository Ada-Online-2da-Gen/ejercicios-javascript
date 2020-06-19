# Styled Components

Usando `styled-components` (y para íconos, [styled-icons](https://styled-icons.js.org/)) hacer los siguientes ejercicios.

## Calculadora

Replicar el siguiente diseño (no tiene que funcionar)

[Link](https://codepen.io/mjijackson/full/xOzyGX)

## Color picker

Replicar el siguiente diseño (no tiene que funcionar, y sin el fondo)

[Link](https://cdn.dribbble.com/users/42663/screenshots/6543384/artboard_copy_20_4x.png?compress=1&resize=1200x900)

## ContactCard

Crear una tarjeta de contacto, que tenga las siguientes props:

- **name:** el nombre y apellido del contacto
- **email:** el email del contacto
- **showAvatar:** `true` si el avatar se muestra, `false` si no
- **avatarShape:** "square" para cuadrado con un pequeño `border-radius`, o "circle" para `border-radius: 50%`
- **size:** los valores posibles son `sm` (small), `md` (medium) y `lg` (large). Dependiendo el tamaño que se elija, se modifica el tamaño del texto, del avatar y del padding de la card.

El componente renderiza algo similar a esto a nivel de estructura:

![](https://i.imgur.com/7G13YlN.png)

El avatar se genera con las iniciales del nombre y apellido del contacto, y un color de fondo aleatorio.

Pueden hacerlo por su propia cuenta, o usar [esta api](https://ui-avatars.com/).
