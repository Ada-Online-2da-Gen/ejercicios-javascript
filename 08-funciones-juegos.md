# Desafíos de juegos para practicar funciones

## Mente maestra

- El juego consiste en lo siguiente: se genera un *código secreto* con una combinación de colores (pueden usarse en vez de colores letras, números o emojis) _sin repetir_, la jugadora debe descubrir el *código secreto* intentando distintas combinaciones. Cada vez que se prueba una combinación, se obtiene una pista de qué tanto se acertó el código, a partir de esa pista, se puede hacer un nuevo intento ahora con más información. El juego termina cuando se queda sin intentos por adivinar o se acierta el código.
- A cada intento de descifrar el código, se tiene que dar una pista que consiste en lo siguiente: una bola negra por cada color que esté en posición correcta, y una bola negra por cada color que esté en el código en posición incorrecta. Si un color no está en el código, no se debe dar nada en específico para ese color.
- Por ejemplo

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

## Memoria

## 4 en línea

## Sliding puzzle

## Blackjack
