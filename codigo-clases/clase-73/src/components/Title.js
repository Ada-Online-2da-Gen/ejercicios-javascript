import React from 'react'

const Title = ({ children, level = 1 }) => {
  const Heading = `h${level}`
  // return React.createElement("heading", null, children)
  // return React.createElement(Heading, null, children)

  return <Heading className='titulo'>{children}</Heading>
}

export default Title
