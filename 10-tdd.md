## Calculadora de strings

1. Crear una función calculadora que tome un string por parámetro
    * la función debe sumar 0, 1 o 2 números, y devolver su suma
    * los números se ingresan separados por coma
    * para un string vacío debe devolver 0
2. Permitir a la función aceptar una cantidad indefinida de números
3. Permitir a la función aceptar otros delimitadores en vez de coma
    * el delimitador se pasa por parámetro
    * el delimitador es opcional
    * el delimitador por defecto es una coma
6. Si se pasa un número negativo, debe tirar un error
    * el error debe indicar qué número negativo se pasó
    * si hay más de un número negativo, debe indicarlos a todos en el error
7. Números mayores a 1000 deben ser ignorados

## Movimiento en Tablero

1. Crear una función que acepte un array 2d, unos índices (de array) correspondientes a coordenadas y un movimiento posible que puede ser: ARRIBA, ABAJO, DERECHA, IZQUIERDA (como string, dentro de un array)
2. Debe devolver el valor de la casilla correspondiente a mover las coordenadas actuales en la dirección que se pidió
3. Si está en algún borde, debe pasar al otro lado
4. Debe aceptar varios movimientos y devolver el resultado final de ese movimiento
5. Debe arrojar un error si un movimiento no es válido o si las coordenadas iniciales son inválidas

## Algoritmo de Luhn

Se utiliza para verificar la validez de una tarjeta, pin, etc. Crear una función que devuelva si un número pasa el algoritmo de Luhn o no.

Número de ejemplo: 4012-8888-8888-1881

* Se divide el número en dígitos. 
    - `4 0 1 2 8 8 8 8 8 8 8 8 1 8 8 1`
* Se multiplica por 2 los dígitos que ocupan las posiciones pares contando de derecha a izquierda y empezando por 1, no por 0.     - `8 0 2 2 16 8 16 8 16 8 16 8 2 8 16 1`
* Los números mayor a 9 se restan por 9.
    - `8 0 2 2 7 8 7 8 7 8 7 8 2 8 7 1`
* Se suman todos los números.
    - `90`
* Si el resto de dividirlo por 10 es 0, el número es válido


## Verificadora de tarjeta

Crear una función que determine si una tarjeta es válida o no

1. Debe permitir ingresar un string
2. Debe verificar que el string sea un numero de Luhn valido
3. Debe verificar que pertenezca a algún tipo de tarjeta, siguiendo las siguientes reglas:
    - American Express: Comienza con 34 o 37, tiene 15 dígitos.
    - Visa: Comienza con 4, tiene 13 o 16 dígitos.
    - MasterCard: Comienza con 51, 52, 53, 54 o 55, tiene 16 dígitos.
4. Debe devolver un string con el tipo de la tarjeta, o "invalid" si no es una tarjeta válida

[Números de tarjeta de prueba](https://www.freeformatter.com/credit-card-number-generator-validator.html#fakeNumbers)

## Paginador

Crear una función que devuelva una páginacion

1. Debe pedir por un número final de página. 
  - Si es igual a 5, debe devolver un array con los números en secuencia contando a partir de 1:
      * `[1, 2, 3, 4, 5]`
2. Debe ingresar el número actual de página. Si la cantidad de números a mostrar es menor que la cantidad de páginas, debe cumplir las siguientes reglas:
  - Si la página actual no está pegada a los límites, se debe agregar puntos suspensivos a cada lado de la página actual: 
      * `[1, '...', 6, '...', 10]`
  - Si la página actual está pegada a los límites, se debe agregar puntos suspensivos en el lado correspondiente: 
      * `[1, 2, '...', 10]`
      * `[1, '...', 9,  10]`
3. Se debe permitir agregar una cantidad X de números extra en los límites
  - Por defecto es 0
  - Ejemplos:
      * `[1, 2, '...', 6, '...', 9, 10]`
      * `[1, 2, 3, '...', 9, 10]`
      * `[1, 2, '...', 8, 9, 10]`
 4. Se debe permitir agregar una cantidad X de números extra a ambos lados de la página seleccionada
  - Por defecto es 1
  - Ejemplos:
      * `[1, 2, '...', 5, 6, 7, '...', 9, 10]`
      * `[1, '...', 5, 6, 7, '...', 10]`
      * `[1, '...', 7, 8, 9, 10]`
  5. Si entre ambos números al lado de puntos suspensivos hay solo un número intermedio, se debe mostrar ese número y no los puntos suspensivos
   - En vez de 
       * `[1, 2, '...', 4, 5, 6, '...', 9, 10]`
   - Mostrar    
       * `[1, 2, 3, 4, 5, 6, '...', 9, 10]`
  6. Nunca puede haber más de dos puntos suspensivos     




