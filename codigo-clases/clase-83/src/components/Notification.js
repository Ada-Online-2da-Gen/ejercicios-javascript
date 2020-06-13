import React from 'react'

const Notification = ({ id, title, message, onClose }) => {
  const handleClick = () => onClose(id)

  return (
    <div>
      <button onClick={handleClick}>X</button>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  )
}

export default Notification
