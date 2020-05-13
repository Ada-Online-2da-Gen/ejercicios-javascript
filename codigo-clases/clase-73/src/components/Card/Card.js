import React from 'react'

import CardHeader from 'components/Card/CardHeader'
import CardFooter from 'components/Card/CardFooter'

const Card = ({ children }) => {
  return <div>{children}</div>
}

Card.Header = CardHeader
Card.Footer = CardFooter

export { CardHeader, CardFooter }
export default Card
