import React from 'react'
import style from './texto.module.scss'
import kitten from './kitten.jpeg'

// Estilos en React
// - estilos en linea con la prop style
// - className con CSS estatico
// - CSS Modules

const Texto = ({ children }) => {
  return (
    <div>
      <img src={kitten} alt='Gatito' />
      <p className={style.texto}>{children}</p>
    </div>
  )
}

export default Texto
