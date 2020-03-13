# Destructuring y operador `spread`

A tener en cuenta:

- No usar notación de punto ni de corchete para acceder a propiedades
- Usar destructuring, spread operator y valores por default cuando hagan falta
- No mutar el objeto original
- Hacer test unitarios

## Ejercicios

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
    "moves": [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    "modifiers": {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}
```

* Crear una función `getMoves` que tome como argumento un pokémon y devuelva la lista de movimientos

* Crear una función `getPrimaryAbility` que tome como argumento un pokémon y devuelva la habilidad primaria

* Crear una función `getWeaknesses` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

* Crear una función `getResistances` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

* Crear una función `resistsType` que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

* Crear una función `resistsMove` que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: `{ name: "Rain dance", type: "water" }`

* Crear una función `resistsPokemon` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es resistente al tipo de pokémon que lo ataca

* Crear una función `addAbility` que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: `{ secondary: "Discharge" }`) y devuelva el pokémon con la habilidad agregada

* Crear una función `addMove` que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

* Crear una función `removeMove` que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

* Crear una función `getAttackModifier`, tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva:
    - 2, si el pokémon atacado es débil (`weakness`) contra el tipo del pokémon que ataca
    - 0,5, si el pokémon atacado es resistente (`resistances`) contra el tipo del pokémon que ataca
    - 1, si no es débil ni resistente

* Crear un función `battle` que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
    - Por ronda, cada pokémon ataca al contrario
    - Comienza atacando el pokémon con más velocidad (`speed`)
    - La batalla termina cuando la vida (`hp`, hit points, puntos de golpe) de un pokémon llega a 0 o menos
    - El daño se calcula de la siguiente forma: 
        ```
        damage = (0.5 * attack * (attack / defense) * modifier)
        ```
        - `attack` es el ataque del pokémon que ataca
        - `defense` es la defensa del pokémon siendo atacado
        - `modifier` se obtiene de la función `getAttackModifier`
        - el daño se resta a la vida (`hp`) del pokémon atacado
    - Se tiene que guardar un registro o historial de cada turno, con la siguiente plantilla:
        ```js
        `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
        ```
        Por ejemplo:
        ```
        "Squirtle used Water Gun! Pikachu lost 12 HP!"
        ```
        Si el pokémon es débil contra el tipo de su atacante, se debe agregar `It's super effective!`, si es resistente, se debe agreagar `It's not very effective!`, por ejemplo:
        ```
        "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
        ```
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
