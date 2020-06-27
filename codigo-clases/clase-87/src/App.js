import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)

    axios
      .get('https://api.thecatapi.com/v1/breeds/beng')
      .then((response) => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        setError(true)
      })
  }, [])

  return (
    <>
      {isLoading && <p>Cargando ...</p>}
      {!isLoading && !error && (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
      )}
      {error && <p>Error!</p>}
    </>
  )
}

export default App
