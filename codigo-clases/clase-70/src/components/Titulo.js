import React from 'react'
import Texto from 'components/Texto'

const Titulo = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
      <Texto>Soy textoo</Texto>
    </div>
  )
}

// varios export nombrados
// un unico export default
export default Titulo
