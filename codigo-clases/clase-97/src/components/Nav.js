import React, { useEffect } from 'react'
import firebase from 'configs/firebase'
import { Link, useHistory } from 'react-router-dom'

const Nav = ({ user }) => {
  const history = useHistory()

  const handleLogout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/login'))

  return (
    <nav>
      <Link to='/'>Home</Link>
      {user ? (
        <>
          <Link to='/account'>My Account</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </>
      )}
    </nav>
  )
}

export default Nav
