import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ user, redirect, children, ...props }) => {
  return user ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to={redirect} />
  )
}

export default ProtectedRoute
