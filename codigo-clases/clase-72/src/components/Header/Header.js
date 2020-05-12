import React from 'react'

const Header = ({ children }) => {
  return (
    <header
      style={{ padding: 20, display: 'flex', justifyContent: 'flex-end' }}
    >
      {children}
    </header>
  )
}

export default Header
