import React, { useState, useEffect } from 'react'

// montaje - desmontaje (mount - unmount)
// renderizado - render
// - cambia el estado
// - cambian los props
// - se rerenderiza un componente padre (o ascendente en la jerarquía)

// Life cicle components - Ciclo de vida de los componentes

// - montaje -> agregar el componente al árbol de componentes
// - renders -> mientras el componente está montado, cuando cambia el estado, cambian las props, cuando se rerenderiza un componente padre
// - desmontaje -> sacamos al componente del árbol de componentes

// useEffect - efectos secundarios
// - timers
// - localStorage
// - event listeners globales
// - acceso al window y al body
// - acceso al DOM
// - uso de APIs

// useEffect
// 1er parámetro -> callback de efecto secundario
// 2do parámetro -> array de dependencias
// Sin array de dependencias -> el callback se ejecuta al montar el componente y en cada renderizado
// Con array de dependencias vacío -> el callback se ejecuta al montar el componente
// Con array de dependencias con valor(es) -> el callback se ejecuta únicamente cuando cambia dicho valor (estado o props), no en los demás rerenders

const Title = () => {
  const [count, setCount] = useState(1)
  const [otherCount, setOtherCount] = useState(1)

  const handleClick = () => setCount(count + 1)
  const handleOtherClick = () => setOtherCount(otherCount + 1)

  // Con array de dependencias vacío -> el callback se ejecuta al montar el componente
  useEffect(() => {
    // console.log('Mounted!')
  }, [])

  // Sin array de dependencias -> se ejecuta al montar el componente y en cada renderizado
  useEffect(() => {
    // console.log('Render!')
  })

  useEffect(() => {
    // Este callback se ejecuta cuando el componente se desmonta y antes de cada render
    // Clean up - Callback
    return () => console.log('Before render || Unmounted!')
  })

  // Si incluimos un valor en el array de dependencias el callback se ejecuta únicamente cuando cambia dicho valor, no en los demás renders
  useEffect(() => {
    console.log(`Valor de count: ${count}`)
  }, [count])

  // ! NO HACER -> Genera un bucle infinito. Si incluimos un estado en el array de dependencias, no modificar dicho estado en el callback
  // useEffect(() => {
  //   setCount(count + 1)
  // }, [count])

  return (
    <>
      <h1>Hola</h1>
      <button onClick={handleClick}>Incrementar {count}</button>
      <button onClick={handleOtherClick}>Incrementar Otro {otherCount}</button>
    </>
  )
}

const PokemonList = ({ page, columns }) => {
  useEffect(() => {
    console.log(`Llamada a API con página ${page}`)
  }, [page])

  return (
    <>
      <h2>Pagina {page}</h2>
      <h3>Columnas {columns}</h3>
    </>
  )
}

const App = () => {
  const [visible, setVisible] = useState(false)
  const [page, setPage] = useState(1)
  const [columns, setColumns] = useState(2)

  const handleClick = () => setVisible(!visible)
  const handlePage = () => setPage(page + 1)
  const handleColumns = () => setColumns(columns + 1)

  return (
    <>
      <button onClick={handleClick}>Mostrar</button>
      <button onClick={handlePage}>Siguiente página</button>
      <button onClick={handleColumns}>Más columnas</button>
      <PokemonList page={page} columns={columns} />
      {/* {visible && <Title />} */}
    </>
  )
}

export default App
