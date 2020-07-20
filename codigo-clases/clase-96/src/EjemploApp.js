import React, { useState, useEffect } from 'react'
import db from './firebase'

// SQL
// Structured Query Language - Lenguaje de Consulta Estructurado
// Consulta -> Operaciones CRUD entre otras
// Tablas -> Estructuradas en cantidad de campos y tipo de dato de campos

/***
 * USUARIOS
 * id | nombre | dni | pais -> Campo
 * ---|--------|-----|----
 * 0  | Ada    | 34442| Inglaterra -> Registro
 *
 */

// No SQL
// JSON
// MongoDB
// No son estructuradas

const EjemploApp = () => {
  const [lastId, setLastId] = useState('')

  // (C)RUD -> CREATE
  const addTodoHandler = () => {
    db
      // selecccionar la colección -> si no existe se crea
      .collection('todos')
      // agregar el objeto del nuevo documento
      .add({
        task: 'Nuevo todo',
        status: 'pending',
      })
      // devuelve una promesa que podemos utilizar para obtener el id del documento creado
      .then((doc) => setLastId(doc.id))
  }

  // C(R)UD -> READ
  // Leer o obtener todos los documentos de una colecci´øn
  const getAllTodosHandler = () => {
    db
      // definimos la colección que queremos buscar
      .collection('todos')
      // con el método get obtenemos los datos
      .get()
      // nos devuelve una promesa cuyo valor es una "foto" de la colección
      .then((snapshot) =>
        // en la propiedad docs tenemos el array de todos los documentos
        // a cada documento podemos acceder a la información mediante el método .data()
        // a cada documento podemos acceder al id la propiedad .id
        snapshot.docs.map((doc) => console.log(doc.data(), doc.id))
      )
  }

  // C(R)UD -> Read one
  // Obtener un documento
  const getTodoHandler = () => {
    db
      // definimos la colección que queremos buscar
      .collection('todos')
      // con el método doc le pasamos el id del documento que queremos obtener
      .doc(lastId)
      // con get hacemos la consulta que nos devuelve una promesa con el documento
      .get()
      // en la promesa podemos accceder a la información mediante el método .data()
      .then((doc) => console.log(doc.data()))
  }

  // CR(U)D -> UPDATE
  // Actualizar valores de un documento
  const completeTodoHandler = () => {
    db.collection('todos')
      .doc(lastId)
      // con el método update le pasamos un objetos de los campos que queremos que se actualicen/agreguen
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
    const unsubscribe = db
      .collection('todos')
      // listener que se activa ante cualquier cambio en la colecci´ón
      // nos devuelve un snapshot que podemos utilizar para actualizar la vista de los datos
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => console.log(doc.data(), doc.id))
      })

    // cortamos la conexion o escucha a la colección cuando el componente se desmonta
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
