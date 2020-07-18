import React, { useState, useEffect, useRef } from 'react'

/**
 * Crear referencias -> valor que está fuera del ciclo de vida de un componente
 * valor mutable
 * valor no lo afecta ni afecta el renderizado
 *
 * CASOS COMUNES
 * - obtener elementos del DOM (no el componente)
 * - obtener valores previos de un componente
 * - performance / reducir ciertos renderizados
 * - saber cuando un componente se renderizo por 1era vez
 */

/**
 * Valor de una referencia
 * - se mantiene entre renderizados
 * - al modificarlo no triggerea un nuevo renderizado
 * - no es reactivo -> cuando se modifica no se ve el cambio en la interfaz renderiza
 */

const App = () => {
  const [rerender, setRerender] = useState(false)
  const valueRef = useRef(0)
  const inputRef = useRef(null)
  const [temperatura, setTemperatura] = useState(0)
  const [temperaturaPrevia, setTemperaturaPrevia] = useState(0)

  const temperaturaRef = useRef(temperatura)

  const handleClick = () => {
    valueRef.current += 1
    console.log(valueRef.current)
  }

  const handleFocus = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
    // NO!
    // inputRef.current.style.border = '10px solid red'
  }

  // useEffect(() => {
  //   console.log('Renderizado')
  // })

  useEffect(() => {
    console.log(`Valor actual: ${temperatura}`)
    console.log(`Valor previo: ${temperaturaRef.current}`)

    if (temperaturaRef.current < temperatura) {
      console.log('Temperatura subio!')
    } else {
      console.log('Temperatura bajo!')
    }
    temperaturaRef.current = temperatura
  }, [temperatura])

  // batch

  // useEffect(() => {
  //   console.log(`Valor actual: ${temperatura}`)
  //   console.log(`Valor previo: ${temperaturaPrevia}`)

  //   if (temperaturaPrevia < temperatura) {
  //     console.log('Temperatura subio!')
  //   } else {
  //     console.log('Temperatura bajo!')
  //   }

  //   setTemperaturaPrevia(temperaturaPrevia)
  // }, [temperatura, temperaturaPrevia])

  useEffect(() => {
    console.log('renderizado')
  })

  return (
    <div className='App'>
      <button onClick={handleClick}>Sumar ref</button>
      <button onClick={() => setRerender(!rerender)}>Rerenderizar</button>
      <h1>{valueRef.current}</h1>
      <button onClick={handleFocus}>Hacer foco</button>
      <input ref={inputRef} />
      <br />
      <button onClick={() => setTemperatura(temperatura + 5)}>+5 grados</button>
      <button onClick={() => setTemperatura(temperatura - 5)}>-5 grados</button>
      <h2>Temperatura {temperatura}</h2>
    </div>
  )
}

export default App
