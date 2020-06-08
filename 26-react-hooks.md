# React Custom Hooks

## useArray

Crear un hook `useArray` que tome por valor inicial un array, y devuelva un array con dos ítems, el primero, conteniendo el array con los items, y el segundo, un objeto con los siguientes métodos:

- `add(item)`
- `getById(id)`
- `replaceById(id, replace)`
- `updateById(id, newProperties)`
- `removeById(id)`
- `clear()`

Ejemplo:

```js
const [todos, todoActions] = useArray([])

// ...
todoActions.add({id: 0, title: 'Comprar cosas'})
```
