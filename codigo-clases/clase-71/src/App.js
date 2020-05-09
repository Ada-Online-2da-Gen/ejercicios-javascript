import React from 'react'
import Titulo from 'components/Titulo/Titulo'
import Texto from 'components/Texto/Texto'
import Lista from 'components/Lista/Lista'

function App() {
  return (
    <div className='App'>
      <Titulo>Hola React</Titulo>
      <Texto>Hola CSS modules</Texto>
      <Lista />
    </div>
  )
}

export default App
