import React, { useContext } from 'react'
import NotificationContext from '../contexts/NotificationContext'

const OpenNotificationButton = () => {
  const { addNotification } = useContext(NotificationContext)

  return <button onClick={addNotification}>Agregar notificaci´ón</button>
}

export default OpenNotificationButton
