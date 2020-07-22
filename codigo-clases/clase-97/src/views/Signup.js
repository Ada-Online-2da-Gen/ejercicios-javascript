import React, { useState } from 'react'
import firebase from 'configs/firebase'
import { Redirect, useHistory } from 'react-router-dom'

const Signup = ({ user }) => {
  const [error, setError] = useState()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(false)

    firebase
      .auth()
      // Metodo para crear usuarios
      .createUserWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(() => history.push('/'))
      .catch((error) => setError(error.message))
  }

  return !user ? (
    <>
      <h1>Sign Up</h1>
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
        <button type='submit'>Sign up</button>
      </form>
    </>
  ) : (
    <Redirect to='/' />
  )
}

export default Signup
