import React from 'react'

const Image = ({ src }) => {
  return (
    <img
      src={src}
      alt=''
      style={{
        width: 'calc(100% + 2px)',
        display: 'block',
        position: 'relative',
        left: '-1px',
      }}
    />
  )
}

export default Image
