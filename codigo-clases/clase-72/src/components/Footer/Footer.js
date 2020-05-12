import React from 'react'

const Footer = ({ children, className, style }) => {
  return (
    <footer
      className={`footerBase ${className}`}
      style={{ textAlign: 'left', ...style }}
    >
      {children}
    </footer>
  )
}

export default Footer
