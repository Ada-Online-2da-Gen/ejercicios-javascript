import React from 'react'
import Footer from 'components/Footer/Footer'

const CardFooter = ({ children }) => {
  return (
    <Footer
      style={{
        display: 'flex',
        borderTop: '1px solid lightgray',
        padding: 20,
      }}
    >
      {children}
    </Footer>
  )
}

export default CardFooter
