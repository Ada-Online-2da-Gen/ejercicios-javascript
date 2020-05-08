import React from 'react'

import * as msg from 'components/Texto'
import Texto, { mensaje as message, otroMensaje } from 'components/Texto'
import Titulo from 'components/Titulo'

const App = () => {
  return (
    <div className='App'>
      <Titulo>Holala</Titulo>
      <Texto>{message}</Texto>
    </div>
  )
}

export default App
