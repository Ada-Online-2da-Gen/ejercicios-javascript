import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Cuando la respuesta llega bien
        setData(data)
        setIsLoading(false)
      })
      .catch(() => {
        // Cuando hay un error
        setIsLoading(false)
        setIsError(true)
      })
  }, [url])

  return [data, isLoading, isError]
}

const App = () => {
  const [characters, isLoading, isError] = useFetch(
    'https://rickandmortyapi.com/api/character/'
  )
  const [character, isCharacterLoading, isCharacterError] = useFetch(
    'https://rickandmortyapi.com/api/character/1'
  )

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error! Try again </p>}
      {characters && (
        <ul>
          {characters.results.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
      {isCharacterLoading && <p>Loading Character...</p>}
      {isCharacterError && <p>Character Error! Try again </p>}
      {character && <h1>{character.name}</h1>}
    </>
  )
}

export default App
