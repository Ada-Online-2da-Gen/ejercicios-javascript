# Destructuring y operador `spread`

A tener en cuenta:

- No usar notación de punto ni de corchete para acceder a propiedades (en la medida que se pueda)
- Usar destructuring, spread operator y valores por default cuando hagan falta
- No mutar el objeto original
- Hacer test unitarios


## Datos

A la hora de hacer los tests, crear funciones de ayuda, o *helpers*, que devuelvan estos objetos. De esta forma, al invocarlas, siempre tenemos un objeto nuevo, y si nuestro test lo modifica, no se va a afectar a otros tests, p. ej:

```js
const getPikachu = () => {
    return {
        name: "Pikacku",
        type: "electric",
        // ...
    }
}
```

```js
const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}
```

```js
const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}
```
```js
const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}
```
```js
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}
```


## Ejercicios

### `getMoves()`
* Crear una función `getMoves` que tome como argumento un pokémon y devuelva la lista de movimientos

### `getPrimaryAbility()`
* Crear una función `getPrimaryAbility` que tome como argumento un pokémon y devuelva la habilidad primaria

### `getWeaknesses()`
* Crear una función `getWeaknesses` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

### `getResistances()`
* Crear una función `getResistances` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

### `resistsType()`
* Crear una función `resistsType` que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

### `resistsMove()`
* Crear una función `resistsMove` que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: `{ name: "Rain dance", type: "water" }`

### `isWeakAgainst()`
* Crear una función `isWeakAgainst` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

### `isStrongAgainst()`
* Crear una función `isStrongAgainst` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es resistente al tipo de pokémon que lo ataca

### `addAbility()`
* Crear una función `addAbility` que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: `{ secondary: "Discharge" }`) y devuelva el pokémon con la habilidad agregada

### `addMove()`
* Crear una función `addMove` que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

### `removeMove()`
* Crear una función `removeMove` que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

### `getAttackModifier()`
* Crear una función `getAttackModifier`, tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva:
    - 2, si el pokémon atacado es débil (`weakness`) contra el tipo del pokémon que ataca
    - 0,5, si el pokémon atacado es resistente (`resistances`) contra el tipo del pokémon que ataca
    - 1, si no es débil ni resistente

### `getAttackLog()`
* Crear una función `getAttackLog`, que tome como argumento un objeto con las siguientes propiedades:

```js
{
    attacker: "Squirtle",
    attacked: "Pikachu",
    move: "Water Gun",
    damage: 12,
    modifier: "weak" // otros valores: "resistant", "normal"
}
```

Y que devuelve un string con la siguiente plantilla:

```js
`${attacker} used ${move}! ${attacked} lost ${damage} HP!`
```

Por ejemplo:

```
"Squirtle used Water Gun! Pikachu lost 12 HP!"
```

Si el pokémon es débil contra el tipo de su atacante, se debe agregar `It's super effective!`, si es resistente, se debe agregar `It's not very effective!`, por ejemplo:

```
"Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
```

### `calculateDamage()`
* Crear una función `calculateDamage` que tome como un argumento un objeto con la siguientes propiedades 
    - `attack` es el ataque del pokémon que ataca
    - `defense` es la defensa del pokémon siendo atacado
    - `modifier` el modificador del daño según el tipo del atacante y del atacado
y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula: 

```js
0.5 * attack * (attack / defense) * modifier
```    

### `battle()`
* Crear un función `battle` que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
    - Por ronda, cada pokémon ataca al contrario
    - Comienza atacando el pokémon con más velocidad (`speed`)
    - La batalla termina cuando la vida (`hp`, hit points, puntos de golpe) de un pokémon llega a 0 o menos
    - El daño se obtiene con la función `calculateDamage` y se resta a la vida del pokémon atacado
    - Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función `getAttackLog`
    - El movimiento se elige de forma aleatoria en cada ataque
    - El objeto que debe devolver como resultado debe seguir la siguiente estructura:
        
```js
{
    rounds: 1,
    results: {
        winner: {
            name: "Pikachu",
            hp: 12 // vida restante
        },
        losser: {
            name: "Squirtle",
            hp: 0
        }
    },
    history: [
        "Squirtle used Water Gun! Pikachu lost 12 HP!", 
        "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
    ]
}
```
