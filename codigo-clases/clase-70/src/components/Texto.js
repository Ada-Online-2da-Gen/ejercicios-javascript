import React from 'react'

const mensaje = 'Hola React!'
const otroMensaje = 'Soy un mensaje'
const mensajePrivado = 'No me podés importar'

const estilo = { color: 'red' }

const Texto = ({ children }) => {
  return <p style={estilo}>{children}</p>
}

// 2 tipos de exports
// default
// - es unico
// - a la hora de importarse le podemos poner cualquier nombre
// nombrados
// - pueden ser multiple
// - se tienen que exportar entre llaves
// - a la hora de importarse o
// - se importa todo con "* as nombre" donde nombre es cualquier cosa
// y accedemos a cada valor exportado como propiedad del objeto nombre
// - o desestructuramos directamente el objeto importado entre llave con
// los nombres de las cosas que queremos importar

export { mensaje, otroMensaje }
export default Texto
