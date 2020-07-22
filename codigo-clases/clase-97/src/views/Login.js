import React, { useState } from 'react'
import firebase from 'configs/firebase'
import { Redirect, useHistory } from 'react-router-dom'

const Login = ({ user }) => {
  const [error, setError] = useState(false)
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(false)
    firebase
      .auth()
      // método para loguear con email y contraseña
      .signInWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(() => history.push('/'))
      .catch((error) => setError(error.message))
  }
  return user ? (
    <Redirect to='/' />
  ) : (
    <>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form action='' onSubmit={handleSubmit}>
        <label>
          Email
          <input type='email' name='email' />
        </label>
        <label>
          Password
          <input type='password' name='password' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
