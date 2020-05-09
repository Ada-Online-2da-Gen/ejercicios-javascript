import React from 'react'
import style from './titulo.module.css'

// Estilos en React
// - estilos en linea con la prop style
// - className con CSS estatico
// - CSS Modules

const Titulo = ({ children }) => {
  return <h1 className={style.titulo}>{children}</h1>
}

export default Titulo
