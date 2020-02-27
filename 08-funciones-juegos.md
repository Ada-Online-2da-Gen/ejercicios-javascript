# Desafíos de juegos para practicar funciones

## Mente maestra

- El juego consiste en lo siguiente: se genera un *código secreto* con una combinación de colores (pueden usarse en vez de colores letras, números o emojis) _sin repetir_, la jugadora debe descubrir el *código secreto* intentando distintas combinaciones. Cada vez que se prueba una combinación, se obtiene una pista de qué tanto se acertó el código, a partir de esa pista, se puede hacer un nuevo intento ahora con más información. El juego termina cuando se queda sin intentos por adivinar o se acierta el código.
- A cada intento de descifrar el código, se tiene que dar una pista que consiste en lo siguiente: una bola negra por cada color que esté en posición correcta, y una bola blanca por cada color que esté en el código en posición incorrecta. Si un color no está en el código, no se debe dar nada en específico para ese color. Las pistas deben estar ordenadas por tipo (primero negras y después blancas), no corresponderse con la posición de cada ficha. Por ejemplo:

```
🔴🔵🟢🟡| CODIGO    // El código se muestra al final
-----------------
🔴🔵🟢🟡| ⚫️⚫️⚫️⚫️ // rojo, azul, verde y amarillo en posición correcta -> CODIGO DESCIFRADO
🟤🔵🟢🟡| ⚫️⚫️⚫️   // azul, verde y amarillo en posición correcta, marrón no está
🟢🔵🟣🟡| ⚫️⚫️⚪️   // azul y amarillo en posición correcta, verde en posición incorrecta, lila no está
🟠🟢🔵🟡| ⚫️⚪️⚪️   // amarillo en posición correcta, verde y azul en posición incorrecta, naranja no está 
```

- Replicar el juego de **Mente maestra**. El programa debe generar un código aleatorio secreto, y se debe ir pidiendo al ingresar una secuencia. La secuencia debe ser válida, es decir, para contar como un intento, tiene que estar bien formada (no puede tener caracteres de más o de menos, ni caracteres que no sean válidos dentro del juego). Una vez que se ingresa el intento, se debe darle la pista a la jugadora correspondiente. A medida que se vayan ingresando los intentos, se tienen que ir acumulando y mostrando todos los ingresados hasta el momento (como en el ejemplo). En el juego original se muestra de abajo hacia arriba (la primera jugada abajo de todas) pero se puede hacer invertido. Mostrar también en cada jugada cuántas jugadas restantes quedan.

- **OPCIONAL:** Para agregar complejidad
  - Permitir definir con qué valores se va a jugar (deberían ser entre 6 y 8 para tener buena dificultad)
  - Permitir cuántas intentos se desea hacer (por default es 15)
  - Permitir seguir jugando una vez terminado
  - Llevar un historial de partidas jugadas (con cuantos intentos se hizo y si se ganó o no)

[Mente maestra online (demo)](https://www.webgamesonline.com/mastermind/index.php)

## Juego de la Memoria

- Replicar el juego de la memoria. El juego consiste en cartas o items ocultos dispuestos en una grilla 2d al azar. Por turno, la jugadora ingresa las coordenadas de dos items a descubrir. Esos items se muestran, si son iguales quedan descubiertos, sino se vuelven a ocultar (por lo tanto todo item tiene su par),y se pierde un intento. El juego termina cuando se descubren todos los items o se quedan sin intentos (5 por defecto). 
- Se debe validar la jugada para ver si es una casilla válida, si no lo es aviasr y no contarlo como intento
- Se deben usar las coordenadas pidiendo (X, Y), y teniendo el punto de origen (1,1) abaja a la izquierda (3,2 significa 3er ítem a la derecha y 2do hacia arriba)

Ejemplo:

```
📦📦📦📦
📦📦📦📦
📦📦📦📦

// Ingrese coordenadas de 2 items a descubrir: 1,1 | 3,2

📦📦📦📦
📦📦🔮📦
🔥📦📦📦

// Ha errado

📦📦📦📦
📦📦📦📦
📦📦📦📦

// Ingrese coordenadas de 2 items a descubrir: 1,1 | 2,3

📦🔥📦📦
📦📦📦📦
🔥📦📦📦

// Ha acertado

📦🔥📦📦
📦📦📦📦
🔥📦📦📦

// Ingrese coordenadas de 2 items a descubrir: ...
```

- **OPCIONAL:** Para agregar complejidad
  - Permitir definir con dimensión de tablero se desea jugar (puede haber dos o tres opciones, la cantidad de ítems tiene que ser para y debe haber la suficiente cantidad de ítems para utilizar)
  - Permitir definir cuántos intentos se desea hacer (por default es 5)
  - Permitir seguir jugando una vez terminado
  - Llevar un historial de partidas jugadas (con cuantos intentos se hizo, con qué tablero y si se ganó o no)

[Juego de la Memoria online](https://www.helpfulgames.com/subjects/brain-training/memory.html)


## Rompecabezas deslizante

- El juego consiste en un tablero de 4x4, donde cada casilla tiene un número (del 1 al 15) excepto por una que en vez de casilla hay una espacio.
  - Los números y el espacio vacío comienzan en posiciones aleatorias
  - El objetivo del juego es ir moviendo las casillas (gracias al espacio vacío, hasta ordenar todos los números de menor a mayor (el 1 tiene que estar arriba a la izquierda y el espacio vacío abajo a la derecha). 
  - Los movimientos posibles son ARRIBA, ABAJO, IZQUIERDA, DERECHA. 
  - Cuando se mueve, se intercambia el espacio vacío por la casilla siguiente en dicha dirección. 
  - No se puede avaznzan contra bordes.  
  - Poner una condición de escape ("SALIR") para salir del juego.
  - Cuando se gana, preguntar si quiere reiniciar el juego y seguir jugando

```
2  14 3  4
5  1  7  13
4  10 11 12
8  9  *  15

// Ingrese un movimiento: ARRIBA

2  14 3  4
5  1  7  13
4  10 *  12
8  9  11 15

// Ingrese un movimiento: IZQUIERDA

2  14 3  4
5  1  7  13
4  *  10 12
8  9  11 15

// Ejemplo victoria

1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 *
```

[Rompecabezas deslizante puzzle](https://www.helpfulgames.com/subjects/brain-training/sliding-puzzle.html)


## 4 en línea

- Replicar el juego de 4 en línea. El juego consiste en ir ingresando en cada turno una ficha en una columna, en un tablero de 7x6. Se juega de a dos, cada jugadora tiene fichas de color distinto al de su rival. El juego se gana cuando se forma 4 en línea, ya sea horizontal, vertical o en diagonal. Ejemplo:

```
⚪️⚪️⚪️⚪️⚪️⚪️⚪️
⚪️⚪️⚪️⚪️⚪️⚪️⚪️
⚪️⚪️⚪️⚪️⚪️⚪️⚪️
⚪️⚪️🔴🔴⚪️⚪️⚪️
⚪️🟢🟢🟢🔴⚪️⚪️
⚪️🔴🔴🟢🟢🔴⚪️

Turno de jugadora verde, ingrese columna: 7

⚪️⚪️⚪️⚪️⚪️⚪️⚪️
⚪️⚪️⚪️⚪️⚪️⚪️⚪️
⚪️⚪️⚪️⚪️⚪️⚪️⚪️
⚪️⚪️🔴🔴⚪️⚪️⚪️
⚪️🟢🟢🟢🔴⚪️⚪️
⚪️🔴🔴🟢🟢🔴🟢
```

- **OPCIONAL:** Para agregar complejidad
  - Permitir usar nombres de jugadoras y poder cambiarlo
  - Permitir seguir jugando una vez terminado
  - Llevar un historial de partidas jugadas (quién ganó y quién perdió)

[4 en línea online](https://c4arena.com/)



## Blackjack
