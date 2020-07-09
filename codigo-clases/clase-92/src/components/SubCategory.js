import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'

const SubCategory = () => {
  const { subcategoryId } = useParams()
  const { path, url } = useRouteMatch()

  return (
    <>
      <h2>{subcategoryId}</h2>
      <p>path: {path}</p>
      <p>url: {url}</p>
      <Link to={`${url}/novedades`}>Novedades</Link>
    </>
  )
}

export default SubCategory
