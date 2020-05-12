import React from 'react'

const Article = ({ children }) => {
  return (
    <article
      style={{
        width: 500,
        border: '1px solid lightgray',
        borderRadius: 5,
        margin: 30,
      }}
    >
      {children}
    </article>
  )
}

export default Article
