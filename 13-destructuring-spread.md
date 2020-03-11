# Destructuring y operador `spread`

A tener en cuenta:

- No usar notación de punto ni de corchete para acceder a propiedades
- Usar destructuring, spread operator y valores por default cuando hagan falta
- No mutar el objeto original
- Hacer test unitarios

## Ejercicios

```js
const pikachu = {
    "name": "Pikachu",
    "id": 25,
    "type": "electric",
    "ability": {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    "moves": [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    "typeDefense": {
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
