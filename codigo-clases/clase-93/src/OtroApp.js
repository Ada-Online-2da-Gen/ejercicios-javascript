import React, { useState, useReducer } from 'react'

const initialValue = {
  columns: 3,
  search: '',
  types: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COLUMNS':
      return {
        ...state,
        columns: action.payload,
      }
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      }
    case 'UPDATE_TYPES':
      if (state.types.includes(action.payload)) {
        return {
          ...state,
          types: state.types.filter((t) => t !== action.payload),
        }
      } else {
        return {
          ...state,
          types: [...state.types, action.payload],
        }
      }
    default:
      throw new Error()
  }
}

const OtroApp = () => {
  const [{ search, columns, types }, dispatch] = useReducer(
    reducer,
    initialValue
  )

  const handleChange = (event) =>
    dispatch({ type: 'SEARCH', payload: event.target.value })
  const handle3Columns = () => dispatch({ type: 'UPDATE_COLUMNS', payload: 3 })
  const handle4Columns = () => dispatch({ type: 'UPDATE_COLUMNS', payload: 4 })
  const updateFilter = (type) =>
    dispatch({ type: 'UPDATE_TYPES', payload: type })

  return (
    <div>
      <input value={search} onChange={handleChange} />
      <button onClick={handle3Columns}>3 columnas</button>
      <button onClick={handle4Columns}>4 columnas</button>
      <input type='checkbox' onChange={() => updateFilter('Agua')} />
      Agua
      <input type='checkbox' onChange={() => updateFilter('Fuego')} />
      Fuego
      <h1>Busqueda {search}</h1>
      <h2>Columnas: {columns}</h2>
      <ul>
        {types.map((filter) => (
          <li key={filter}>{filter}</li>
        ))}
      </ul>
    </div>
  )
}

export default OtroApp
