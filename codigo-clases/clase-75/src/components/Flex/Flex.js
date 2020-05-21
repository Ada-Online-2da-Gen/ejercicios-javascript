import React from 'react'

const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  style,
  children,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Flex
