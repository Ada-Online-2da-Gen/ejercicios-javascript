import React, { useState, useEffect } from 'react'
import firebase from 'configs/firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'views/Home'
import Login from 'views/Login'
import Signup from 'views/Signup'
import Account from 'views/Account'
import Nav from 'components/Nav'
import ProtectedRoute from 'components/ProtectedRoute'

// signInWithEmailAndPassword
// createUserWithEmailAndPassword
// onAuthStateChanged
// sendPasswordResetEmail

const App = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      // listener que se ejecuta cuando hay un cambio el usuario se loguea/desloguea
      // cuando el usuario está deslogueado es null
      .onAuthStateChanged((user) => {
        console.log(user)
        setUser(user)
        setLoading(false)
      })
    // cortamos la conexión cuando el componente se desmonta
    return () => unsubscribe()
  }, [])

  return loading ? (
    <h1>Loading</h1>
  ) : (
    // <Home user={user} />
    <div>
      <Router>
        <Nav user={user} />
        <Switch>
          <Route exact path='/'>
            <Home user={user} />
          </Route>
          <Route path='/login'>
            <Login user={user} />
          </Route>
          <Route path='/signup'>
            <Signup user={user} />
          </Route>
          <ProtectedRoute user={user} redirect='/login' path='/account'>
            <Account user={user} />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
