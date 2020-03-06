# Callbacks

## map

* Crear una función `map` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - obtenga el resultado
    - lo pushee a un nuevo array
    - devuelva el array final con el resultado de cada una de las llamadas al callback. 
  
Ejemplo:

```javascript
const numeros = [1, 2, 3]
const duplicar = x => x * 2
map(numeros, duplicar) // [2, 4, 6]
```

## filter

* Crear una función `filter` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - si dicho callback devuelve `true`, pushea el elemento a un nuevo array
    - devuelva el array final con los elementos que pasaron el "filtro". 
  
Ejemplo:

```javascript
const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
filter(numeros, multiploDe10) // [10, 40, 50]
```


## every

* Crear una función `every` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - devuelva `true` si *todas* las llamadas al callback devolvieron `true`
    
Ejemplo:

```javascript
const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const esPositivo = x => x >= 0

every(numeros, multiploDe10) // false
every(numeros, esPositivo) // true
```

## some

* Crear una función `some` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - devuelva `true` si *al menos una* de las llamadas al callback devolvió `true`
    
Ejemplo:

```javascript
const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const esPositivo = x => x >= 0

some(numeros, multiploDe10) // true
some(numeros, esPositivo) // true
```

## find

* Crear una función `find` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - devuelva el elemento pasado como argumento del primer callback que devuelva `true`
    - si ningún callback devuelve `true`, devuelva `undefined`

```javascript
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
find(numeros, multiploDe10) // 40
```

## findIndex

* Crear una función `findIndex` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - devuelva el índice del elemento pasado como argumento del primer callback que devuelva `true`
    - si ningún callback devuelve `true`, devuelva `undefined`

```javascript
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
find(numeros, multiploDe10) // 3
```

## dropWhile

* Crear una función `dropWhile` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - devuelva un array con los elementos *a partir* del primer callback que devolvió `false`

(Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da `false` *por primera vez* agrega todos los elementos restantes a partir de dicho elemento inclusive)

```javascript
const numeros = [40, 33, 50, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0
dropWhile(numeros, multiploDe10) // [8, 2, 3, 20]
```

## takeWhile

* Crear una función `takeWhile` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - devuelva un array con los elementos *hasta* el primer callback que devolvió `false`

(Inverso del `dropWhile`)

```javascript
const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0
takeWhile(numeros, multiploDe10) // [40, 50]
```
