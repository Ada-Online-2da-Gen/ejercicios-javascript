import React, { useState, useEffect } from 'react'
import db from './firebase'
import data from './data'
import './styles.css'

// ordenar
// filtrar

// limitar
// paginar

const EjercicioApp = () => {
  const [characters, setCharacters] = useState([])

  const loadCharacters = () => {
    data.forEach((c) => {
      db.collection('characters')
        .add(c)
        .get()
        .then((doc) => console.log(`Cargado ${doc.id}`))
    })
  }

  return (
    <>
      <button onClick={loadCharacters}>Cargar</button>

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

export default EjercicioApp
