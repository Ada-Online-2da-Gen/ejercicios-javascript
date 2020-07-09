import React, { useState } from 'react'
import Navigation from 'components/Navigation'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Categories from 'components/Categories'
import Products from 'components/Products'

/**
 * NavLink -> navs con estilos cuando están activos
 * Redireccionamiento -> Redirect
 * Manejar el historial -> useHistory
 * Hacer rutas anidadas -> con useRouteMatch -> path vs url
 */

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Navigation />
      <button onClick={() => setLoggedIn(!loggedIn)}>Loguear</button>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
        <Route path='/products' component={Products} />
        <Route exact path='/account'>
          <h1>My account</h1>
          {!loggedIn && <Redirect to='/login' />}
        </Route>
        <Route exact path='/login'>
          <h1>Login</h1>
        </Route>
        <Route>
          <h1>No encontrado</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
