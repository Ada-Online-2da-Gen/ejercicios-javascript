# Ejercicios con useState

Los componentes de este ejercicio no son componentes específicos, la idea es practicar useState por lo que no se preocupen por hacerlos reutilizables, estilarlos o ponerles nombres adecuados.

## Consignas

- Hacer un componente que renderice un componente `p`, al que se le pueda ingresar texto, y que al clickear el texto switchee el color del mismo (p. ej.: si está en negro que pase a rojo y si está en rojo que esté en negro)

- Hacer un componente `Collapse`, que tome `children` y una prop `label`. Inicialmente debe mostrar la label con algún ícono o emoji que indique que puede abrirse (+, 👉, ▶). Cuando se lo cliquea, debe renderizar el `children` y cambiar el ícono o emoji a algo que indique puede cerrarse (-, 👇, ▼). Al clickearlo nuevamente, debe expandirse (como un toggle). Ejemplo:

```
Qué debo hacer para utilizar estado en React? (+)
```

```
Qué debo hacer para utilizar estado en React? (-)

Para utilizar estado en React...
```

- Crear una miniapp que tenga varios botones con distintos precios ($50, $100, etc). Al hacer click en un botón, se debe agregar el gasto a una lista de precios, y se debe mostrar la suma total de los precios, p. ej.:

```
[+$10] [+$50] [+$100]

Gastos:
$10
$10
$50
$10
$100
$50

Total:
$230
```

Como desafío extra, agregarle a cada botón el nombre de un producto, que debería aparecer en la lista de gastos (p. ej.: Caramelos $10)

- Crear una miniapp que tenga varios botones con distintos valores (1, 10, 100, etc) y dos botones extra: Sumar y Restar. Se debe mostrar un botón que se debe ir actualizando si se apreta sumar o restar. El valor que se debe sumar o restar es el valor seleccionado en los botones, por ejemplo, si clickeo 1, al apretar sumar debe sumar 1, si luego clickeo 10, al clickear restar debe restar 10, etc.
