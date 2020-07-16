import React, { useState, useContext } from 'react'
import TodoContext from 'contexts/TodoContext'
// useReducer
// reducer = state + action = newState

const App = () => {
  const { todos, dispatchTodos, addTodoAction, deleteTodoAction } = useContext(
    TodoContext
  )
  const [todo, setTodo] = useState('')

  const handleChange = (event) => setTodo(event.target.value)

  const handleAddTodo = () => dispatchTodos(addTodoAction(todo))

  const handleDeleteTodo = (id) => dispatchTodos(deleteTodoAction(id))

  return (
    <div>
      <input type='text' value={todo} onChange={handleChange} />
      <button onClick={handleAddTodo}>Agregar Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.message}
            <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
