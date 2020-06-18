# React Context

## Estructura de componentes

```
Header
  LanguageSelector
Aside
  Filters
Main
  ResultOptions
  SearchResults
```

## Condiciones

- No usar composición (children) en lo posible (excepto en contextos)
- `SearchResults` debe tener una lista de componentes `PokemonCard`
- `SearchResults` se muestra como una grilla de cards
- `PokemonCard` debe mostrar el número, el nombre, la imagen, y los tipos
- Utilizar 3 contextos, uno para el lenguaje, otro para los datos, y otro para la visualización.

### Filtrado

- `Filters` debe contener una lista de `Filter`
- `Filter` debe tener un checkbox y un texto
- Debería haber un `Filter` para cada tipo de pokémon, p.ej. ("Grass", "Poison", "Fire", etc)
- Generar la lista de filtros dinámicamente a partir de los datos
- Al chequear un filtro de un tipo, debería actualizarse los pókemons mostrados con aquellos que posean dicho tipo
- Pueden filtrarse varios tipos a la vez, por ejemplo, "Grass" y "Poison". Solo se deben mostrar los pokémons que tengan todos los tipos seleccionados.
- `ResultOptions` también debe tener un select con dos opciones: "Ordenar por número", "Ordenar por nombre". El valor por defecto debería ser "Ordenar por número". Si se cambia la opción en el select, se debe actualizar la lista mostrada, ordenándola respectivamente (en ambos casos de menor a mayor). En caso de que haya filtros activos, se deben mantener, es decir, si hay 3 pokemons mostrados porque hay filtros seleccionados, hay que ordenar esos 3 solamente.

### Visualización

- `ResultOptions` debe tener un botón que diga "Mostrar 3" y un botón que diga "Mostrar 4"
- Si se clickea "Mostrar 3", se deben mostrar 3 pókemons por fila, si se clickea "Mostrar 4" se deben mostrar 4

### Lenguaje

- `LanguageSelector` debe tener un select con dos opciones: "Español" e "Inglés". El valor inicial es español.
- `Filters` debe contener también un título que diga "Filtros", `SearchResults` debe contener también un título que diga "Resultados" y "ResultOptions" debe contener un título que diga "Opciones"
- Si se selecciona un nuevo lenguaje, se debe cambiar el texto de los títulos para reflejar el cambio. Usar un enum y no un booleano (por si se desean agregar más lenguajes).

## Datos

```javascript
const pokemons = [
  {
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: ['Grass', 'Poison'],
  },
  {
    id: 2,
    num: '002',
    name: 'Ivysaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    type: ['Grass', 'Poison'],
  },
  {
    id: 3,
    num: '003',
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    type: ['Grass', 'Poison'],
  },
  {
    id: 4,
    num: '004',
    name: 'Charmander',
    img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
    type: ['Fire'],
  },
  {
    id: 5,
    num: '005',
    name: 'Charmeleon',
    img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
    type: ['Fire'],
  },
  {
    id: 6,
    num: '006',
    name: 'Charizard',
    img: 'http://www.serebii.net/pokemongo/pokemon/006.png',
    type: ['Fire', 'Flying'],
  },
  {
    id: 7,
    num: '007',
    name: 'Squirtle',
    img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
    type: ['Water'],
  },
  {
    id: 8,
    num: '008',
    name: 'Wartortle',
    img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
    type: ['Water'],
  },
  {
    id: 9,
    num: '009',
    name: 'Blastoise',
    img: 'http://www.serebii.net/pokemongo/pokemon/009.png',
    type: ['Water'],
  },
  {
    id: 10,
    num: '010',
    name: 'Caterpie',
    img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
    type: ['Bug'],
  },
  {
    id: 11,
    num: '011',
    name: 'Metapod',
    img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
    type: ['Bug'],
  },
  {
    id: 12,
    num: '012',
    name: 'Butterfree',
    img: 'http://www.serebii.net/pokemongo/pokemon/012.png',
    type: ['Bug', 'Flying'],
  },
]
```
