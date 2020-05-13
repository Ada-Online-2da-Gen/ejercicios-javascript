import React from 'react'

const Container = ({ as = 'div', children, className, ...props }) => {
  const Component = as
  return (
    <Component className={`contenedor ${className}`} {...props}>
      {children}
    </Component>
  )
}

export default Container
