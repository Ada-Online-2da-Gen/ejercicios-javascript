import React, { useState } from 'react'

const App = () => {
  // Hooks - "Gancho"
  // const [state, setState] = useState(0)
  const [visible, setVisible] = useState(true)
  const [items, setItems] = useState(['Item 0'])

  const toggle = () => setVisible(!visible)

  const addItem = () => {
    setItems([...items, `Item ${items.length}`])
  }

  return (
    <div>
      {visible && <h1>Hola</h1>}
      <button onClick={toggle}>{visible ? 'Ocultar' : 'Mostrar'}</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Agregar item</button>
    </div>
  )
}

export default App
