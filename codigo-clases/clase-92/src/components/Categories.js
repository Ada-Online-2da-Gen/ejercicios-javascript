import React from 'react'
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import SubCategory from 'components/SubCategory'

const Categories = () => {
  // Nos permite manejar el historial de rutas
  const history = useHistory()
  const { path, url } = useRouteMatch()

  const handleClick = () => {
    history.push('/')
  }

  const handleGoBack = () => {
    history.goBack()
    // history.go(2)
  }

  return (
    <div>
      <h1>Categories</h1>
      <Link to={`${url}/celulares`}>Celulares</Link>
      <br />
      <Link to={`${url}/computadoras`}>Computadoras</Link>
      <br />
      <Link to={`${url}/muebles`}>Muebles</Link>
      <br />
      <Switch>
        <Route path={`${path}/:subcategoryId`} component={SubCategory} />
      </Switch>

      <button onClick={handleClick}>Ir a Home</button>
      <button onClick={handleGoBack}>Ir atrás</button>
    </div>
  )
}

export default Categories
