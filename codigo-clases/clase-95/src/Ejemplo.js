import React, { useState, useEffect, useRef } from 'react'

// debounce -> ejecutar un efecto cuando se termina de realizar una accion
// throttle -> controlar cuando se hace un efecto

const Ejemplo = () => {
  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState([])
  const timerRef = useRef(null)
  const llamadaEnCursoRef = useRef(false)

  const handleChange = (event) => setSearch(event.target.value)

  const llamarApi = () =>
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}
  `)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        llamadaEnCursoRef.current = false
      })

  // DEBOUNCE
  // useEffect(() => {
  //   clearTimeout(timerRef.current)
  //   timerRef.current = setTimeout(() => llamarApi(search), 1000)
  // }, [search])

  // throttle
  useEffect(() => {
    if (llamadaEnCursoRef.current) {
      return
    }
    llamadaEnCursoRef.current = true
    setTimeout(() => {
      llamadaEnCursoRef.current = false
      fetch(`https://rickandmortyapi.com/api/character/?name=${search}
    `)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results)
        })
    }, 800)
  }, [search])

  return (
    <div>
      <input focus='true' value={search} onChange={handleChange} />
      <ul>
        {characters &&
          characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default Ejemplo
