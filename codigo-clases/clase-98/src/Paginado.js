import React, { useState, useEffect } from 'react'
import db from './firebase'
import './styles.css'

const queryRef = db.collection('characters').orderBy('name')

const Paginado = () => {
  const [characters, setCharacters] = useState([])
  const [firstCharacter, setFirstCharacter] = useState({})
  const [lastCharacter, setLastCharacter] = useState({})

  // Paginado
  // - ordenar los resultados
  // - limitarlos
  // - avanzar => startAfter(documento) (offset)

  const procesarResultados = (snapshot) => {
    setFirstCharacter(snapshot.docs[0])
    setLastCharacter(snapshot.docs[snapshot.docs.length - 1])
    setCharacters(
      snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
    )
  }

  const handleNext = () => {
    queryRef.startAfter(lastCharacter).limit(10).get().then(procesarResultados)
  }

  const handlePrevious = () => {
    queryRef
      .endBefore(firstCharacter)
      .limitToLast(10)
      .get()
      .then(procesarResultados)
  }

  useEffect(() => {
    queryRef.limit(10).get().then(procesarResultados)
  }, [])

  return (
    <>
      <button onClick={handlePrevious}>Retroceder</button>
      <button onClick={handleNext}>Avanzar</button>
      <div className='characters'>
        {characters.map((character) => (
          <article key={character.firebaseId}>
            <img src={character.image} alt='' />
            <h3 className='character-name'>{character.name}</h3>
          </article>
        ))}
      </div>
    </>
  )
}

export default Paginado
