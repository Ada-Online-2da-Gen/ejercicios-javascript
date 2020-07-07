import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/categories/electronics'>Electronics</Link>
      <Link to='/products'>Products</Link>
      <Link to='/product'>Product</Link>
      <ul>
        <li>
          <Link to='/product/celular'>Celular</Link>
        </li>
        <li>
          <Link to='/product/notebook'>Notebook</Link>
        </li>
        <li>
          <Link to='/product/televisor'>Televisor</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
