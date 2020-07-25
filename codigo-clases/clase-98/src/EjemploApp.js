import React, { useState, useEffect } from 'react'
import db from './firebase'
import data from './data'

const EjemploApp = () => {
  const [lastId, setLastId] = useState('')

  // (C)RUD -> CREATE
  const addTodoHandler = () => {
    db.collection('todos')
      .add({
        task: 'Nuevo todo',
        status: 'pending',
      })
      .then((doc) => setLastId(doc.id))
  }

  // C(R)UD -> READ
  const getAllTodosHandler = () => {
    db.collection('todos')
      .orderBy('task')
      .limit(3)
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        db.collection('todos')
          .orderBy('task')
          .startAfter(snapshot.docs[2])
          .limit(3)
          .get()
          .then((snapshot) =>
            console.log(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
          )
      })
  }

  // C(R)UD -> Read one
  const getTodoHandler = () => {
    db.collection('todos')
      .doc(lastId)
      .get()
      .then((doc) => console.log(doc.data()))
  }

  // CR(U)D -> UPDATE
  // Actualizar valores de un documento
  const completeTodoHandler = () => {
    db.collection('todos')
      .doc(lastId)
      .update({
        status: 'completed',
      })
      .then(() => console.log('Actualizado!'))
  }

  // CRU(D) -> DELETE
  // Borrar un documento
  const deleteTodoHandler = () => {
    db.collection('todos')
      .doc(lastId)
      .delete()
      .then(() => console.log('Borrado!'))
  }

  useEffect(() => {
    const unsubscribe = db.collection('todos').onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <button onClick={addTodoHandler}>Add todo</button>
      <button onClick={getAllTodosHandler}>Get all todos</button>
      <button onClick={getTodoHandler}>Obtener last todo</button>
      <button onClick={completeTodoHandler}>Complete last todo</button>
      <button onClick={deleteTodoHandler}>Delete last todo</button>
    </div>
  )
}

export default EjemploApp
