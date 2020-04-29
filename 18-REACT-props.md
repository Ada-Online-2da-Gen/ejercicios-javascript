# REACT - Props

## Price

Crear un componente `Price` que tenga los props: 
- `amount`, que toma un número
- `currency`, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)

y que renderice el precio formateado con el símbolo de la moneda adelante

Investigar [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

## Date

Crear un componente `Date` que tenga un prop `date` que tome un objeto de tipo `Date`, y renderice un elemento `p` con la fecha formateada, por ejemplo: `miércoles, 29 de abril de 2020`

Investigar [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

## Pagination

Crear un componente pagination que tome los siguientes props:
- `current`, número de la página actual
- `max`, número de la página máxima

y renderice un paginado de la siguiente forma: `[Previous] [1] [...] [5] [...] [10] [Next]`, es decir, la página 1, puntos suspensivos, la página actual, puntos suspensivos y la página máxima, con las palabras para avanzar y retroceder.

Ignorar lo que sucede si la página actual es igual a la primera o a la última.

Darle algunos estilos, por ejemplo:

![](https://miro.medium.com/max/800/1*HqgSs4VRO5OaMIo8TSo5dg.png)

## StarRating y Rating

Crear un componente `StarRating` que tome un prop `type` con los valores `filled` o `empty` y muestre un ícono de una estrella llena o vacía según el caso

Crear un componente `Rating` que tome un prop `score` que sea del 1 al 5 y renderice 5 estrellas, siendo valor de `score` la cantidad de `StarRating` con `type` `filled`, mientras las restantes son `type` `empty`, por ejemplo: ★★★✩✩

## Alert

Crear un componente `Alert` que 
- tenga como props `status` y `message`
- `message` es el mensaje de la alert
- `status` es un string con alguno de los siguientes valores: 
    - `danger` 
    - `success` 
    - `warning` 
    - `info`
- cada `status` renderiza el componente de un forma distinta, con sus propios colores de e iconos, de la siguiente forma:    

![](https://user-images.githubusercontent.com/1174092/69897281-33747800-134a-11ea-953f-3e31912f1f15.png)
