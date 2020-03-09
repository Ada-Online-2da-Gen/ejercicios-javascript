# Objetos

Hacer test unitarios y funciones puras (no deberían mutar los objetos pasados como argumentos)

## Volumen de caja

- Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

```javascript
const size = { width: 2, length: 5, height: 1 } 
getBoxVolume(size) // returns 10
```

## Unión de objetos

- Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.

```javascript
const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}
merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}
```

## Diferencia de objetos

- Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos

```javascript
const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}
differentiate(info1, info2) // returns {a: 1, c: 3, d: 4}
```

## Eliminar propiedades

- Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array

```javascript
const data = {a: 1, b: 2, c: 3}
const props = ["c"]
removeProperties(data, props) // returns {a: 1}
```

## Filtrar propiedades

- Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array

```javascript
const data = {a: 1, b: 2, c: 3}
const props = ["c", "b"]
filterProperties(data, props) // returns {b: 2, c: 3}
```

## Comprar productos

- Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor `true` si puede comprarlo o `false` sino

```javascript
const products = { cookies: 60, chocolate: 110, soda: 120, }
const money = 115
buyProducts(money, products) // returns { cookies: true, chocolate: true, soda: false}
```

## Obtener experiencia

- Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida

```javascript
const score = { EASY: 10, MEDIUM: 50, HARD: 100}
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2}
getXP(challenges, score) // returns 630 (3 * 10 + 4 * 50 + 2 * 100)
```

## Analizando strings

- Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra

```javascript
getStringInfo("H3ll0 Wor1d") // returns {"LETTERS:  7, DIGITS: 3, SPACES: 1 }
```

**EXTRA:** averiguar cómo chequear si un string es una letra o no y usarlo para que diferencie entre letras, números y símbolos

## Contar palabras

- Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula  

```javascript
countWords("El que compra pocas capas pocas capas paga") // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }
```

## Ocurrencias en palabra

- Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)

```javascript
findOcurrencies("Hello World", ["o", "l"])

/** returns
{
  hello: {
    o: 1,
    l: 2
  },   
  world: {
    o: 1,
    l: 1
  }
}
```

## Batalla

- Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: `daño = ataque - defensaEnemigo` y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.

```javascript
const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
const fighterA = { name: "Cammy", life: 50, attack: 20, defense: 20 }
fight(fighterA, fighterB) // returns { rounds: 3, winner: "Chun-Li"}
```
