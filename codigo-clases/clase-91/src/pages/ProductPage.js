import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { productId } = useParams()
  return (
    <div>
      <h1>Producto {productId}</h1>
    </div>
  )
}

export default ProductPage
