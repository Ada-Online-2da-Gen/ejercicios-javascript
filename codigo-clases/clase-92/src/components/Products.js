import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const Products = () => {
  const history = useHistory()
  const { pathname, search } = useLocation()

  console.log(pathname, search)

  const handleClick = () => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('discount', true)
    const newUrl = `${pathname}?${searchParams.toString()}`
    history.push(newUrl)
  }

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleClick}>Buscar con descuento</button>
    </div>
  )
}

export default Products
