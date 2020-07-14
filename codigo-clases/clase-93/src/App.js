import React, { useState, useReducer } from 'react'

// Redux -> librería de manejo de estado

// reducer -> funci´ón que toma un conjunto de valores y devuelve un único valor
// (state, action) -> newState
// reducer -> función pura -> no puede mutar el estado, no puede tener efectos secundarios

// state -> dispatch -> reducer -> newState

// Ventajas

// Separación de lógica/componente
// Facilidad de testeo
// Centralización de la lógica
// Declarativo

// Casos de uso vs useState

// Lógica compleja
// Estado complejo
// más de 3 estados relacionados en un componentes
// Testear lo´gica
// Reutilizar la lógica

// Cuándo utilizar useState

// Cuando estado es un valor primitivo -> strings, numbers, booleans y no tiene una lógica compleja
// Cuando es uno o dos estados en un componente

// const reducer = (state, action ) => {
//   switch (action) {
//     case 'INCREASE':
//       return state + 1
//     case 'DECREASE':
//       return state - 1
//     case 'RESET':
//       return 0
//     default:
//       return state
//   }
// }

const COUNTER_ACTIONS = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  RESET: 'reset',
}

const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREASE:
      return state + 1
    case COUNTER_ACTIONS.DECREASE:
      return state - 1
    case COUNTER_ACTIONS.RESET:
      return 0
    default:
      throw new Error(`Invalid action: ${action.type}`)
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0)

  const increase = () => dispatch({ type: COUNTER_ACTIONS.INCREASE })
  const decrease = () => dispatch({ type: COUNTER_ACTIONS.DECREASE })
  const reset = () => dispatch({ type: COUNTER_ACTIONS.RESET })

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increase}>Sumar</button>
      <button onClick={decrease}>Restar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  )
}

export default App
