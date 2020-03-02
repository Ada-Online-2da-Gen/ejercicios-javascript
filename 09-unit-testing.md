# Práctica unit testing

Escribir las siguientes funciones siguiendo el proceso de TDD (Test Driven Development)

1. Escribir el test con el resultado esperado y verlo fallar
2. Escribir la función para que el resultado de verde
3. Mejorar la función

## Ejercicios


```javascript
/** 
 * @name toCamelCase
 * @description Convierte un string en dash-case a camelCase
 * 
 * @param {string} str - El string en dash-case a convertir
 * @returns {String} El string en camelCase convertido
 *
 * @example
 *  toCamelCase('javascript-es-raro') // returns 'javascriptEsRaro'
 */
```

```javascript
/** 
 * @name getShortestWords
 * @description Obtiene la(s) palabra(s) más corta(s) de un string
 * 
 * @param {string} text - El texto del que se desea obtener las palabras
 * @returns {String[]} Array de palabra(s) más cortas de {text}
 *
 * @example
 *  getShortestWords('no sé por qué no funciona') // returns ['no', 'sé']
 */
```

```javascript
/** 
 * @name getTallestSkyscraper
 * @description Dado un array 2D donde los 1 representan edificios (dispuestos verticalmente), devuelve la altura del edificio 
 * más alto (cantidad de 1s)
 * 
 * @param {number[][]} skyline - Representación de la vista de edificios de una ciudad, donde 1s son edificios y 0 el resto  * 
 * (cielo)
 * @returns {Number} La altura del edificio más alto
 *
 * @example
 *  getTallestSkyscraper([
 *    [0, 0, 0, 0],
 *    [0, 1, 0, 0],
 *    [0, 1, 1, 0],
 *    [1, 1, 1, 1]
 *  ]) // returns 3
 */
```

```javascript
/** 
 * @name getTicTacToeResult
 * @description Dado un array 2D que represente una partida de Ta-Te-Ti, debe devolver un string indicando el resultado, 
 * siendo 'X', 'O' si ganó alguno de ellos respectivamente, o empate
 * 
 * @param {string[][]} board - Representación de un tablero de Ta-Te-Ti, usando 'X', 'O' para jugadas de cada jugador y 'E' 
 * para un espacio vacío
 * @returns {String} Resultado de la partidad, siendo 'X' u 'O' si ganó alguno de ellos respectivamente, o 'Draw' (empate) si 
 * ninguno lo hizo
 *
 * @example
 *   getTicTacToeResult([
 *     ['O', 'O', 'O'],
 *     ['O', 'X', 'X'],
 *     ['E', 'X', 'X']
 *   ]) ➞ returns 'O'
 */
```

```javascript
/** 
 * @name uncensor
 * @description Dado un texto censurado y una lista de letras en orden recupera el texto censurado reemplazando cada letra 
 * censurada por su correspondiente
 * 
 * @param {string} censoredText - El texto censurado a recuperar. Las letras censuradas se representan con *
 * @param {string[]} censoredLetters - Letras censuradas en orden a como corresponde al {censoredText}
 * @returns {string} El texto sin censurar
 *
 * @example
 *  uncensor('*di* Ja**Scr*p*', ['O', 'o', 'v', 'a', 'i', 't']) // returns 'Odio JavaScript'
 */
```


```javascript
/** 
 * @name isPalindrome
 * @description Chequea si un string es palíndromo (capicúa), es decir, si puede ser leído de igual manera de izquierda a 
 * derecha como de derecha a izquierda (ignorando espacios)
 * 
 * @param {string} text - El texto que se desea verificar
 * @returns {Boolean} Devuelve true si {text} es palíndromo, false sino
 *
 * @example
 *  isPalindrome('Arriba la birra') // returns true
 */
```

```javascript
/** 
 * @name getNextPalindrome
 * @description Devuelve el siguiente número palíndromo de un número x
 * 
 * @param {number} x - Número del que sea desea obtener el siguiente palíndromo
 * @returns {Number} El siguiente palíndromo
 *
 * @example
 *  getNextPalindrome(103) // returns 111
 */
```

