import React, { useState, useEffect } from 'react'
import db from './firebase'
import './styles.css'

// ordenar
// filtrar

// limitar
// paginar

const App = () => {
  const [characters, setCharacters] = useState([])

  const handleFilterByGender = (gender) => {
    db
      // --------
      // Comienza consulta
      // --------
      .collection('characters')
      // Permite agregar una condici´ón según una propiedad del documento
      // Parámetros (propiedad, operador, valor)
      // Si encadenamos varios where la condición es inclusiva (&&)
      .where('gender', '==', gender)
      .where('species', '==', 'Human')
      .orderBy('name', 'asc')
      .limit(15)
      // --------
      // Termina consulta
      // --------
      // Realiza consulta
      .get()
      // Obtiene foto de la consulta
      .then((snapshot) =>
        setCharacters(
          snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
        )
      )
  }

  const handleOrderByName = (direction) => {
    db.collection('characters')
      // Ordena los resultado seg´¨ún el valor de un campo
      .orderBy('name', direction)
      .limit(10)
      .get()
      .then((snapshot) =>
        setCharacters(
          snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
        )
      )
  }

  const handleLimit = (number) => {
    db.collection('characters')
      // Limitar la cantidad de resultados de la consulta
      .limit(number)
      .get()
      .then((snapshot) =>
        setCharacters(
          snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
        )
      )
  }

  const getAllCharacters = () =>
    db
      .collection('characters')
      .get()
      .then((snapshot) =>
        setCharacters(
          snapshot.docs.map((doc) => ({ ...doc.data(), firebaseId: doc.id }))
        )
      )

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <>
      <button onClick={getAllCharacters}>Todo</button>
      <button onClick={() => handleLimit(5)}>Traer 5</button>
      <button onClick={() => handleLimit(10)}>Traer 10</button>
      <button onClick={() => handleFilterByGender('Male')}>Male</button>
      <button onClick={() => handleFilterByGender('Female')}>Female</button>
      <button onClick={() => handleFilterByGender('unknown')}>Unknow</button>
      <button onClick={() => handleOrderByName('asc')}>A-Z</button>
      <button onClick={() => handleOrderByName('desc')}>Z-A</button>

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

export default App
