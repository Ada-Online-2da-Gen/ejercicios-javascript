import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import CategoriesPage from 'pages/CategoriesPage'
import ProductsPage from 'pages/ProductsPage'
import NotFoundPage from 'pages/NotFoundPage'
import Nav from 'components/Nav'
import ProductPage from 'pages/ProductPage'

// Routing -> Ruteo
// Vistas -> Pantallas -> Páginas
// CRUD -> ABM
// - listados de entidades
// - detalle/información de entidad
// - edición de entidad

// Vistas -> Pantallas -> Páginas --> Componente
// SPA (Single Page Application) -> Aplicaciones de Página Única

const PATHS = {
  HOME: '/',
  CATEGORIES: '/categories',
}

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={PATHS.HOME} component={HomePage} />
        <Route exact path={PATHS.CATEGORIES} component={CategoriesPage} />
        <Route exact path='/categories/electronics'>
          <h1>Electronics</h1>
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route exact path='/product/:productId'>
          <ProductPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
