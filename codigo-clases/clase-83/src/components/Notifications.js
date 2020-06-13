import React, { useContext } from 'react'
import NotificationContext from '../contexts/NotificationContext'
import Notification from './Notification'

// Pattern Container / Presentational
// Patrón Contenedor / Presentación

const Notifications = () => {
  const { notifications, deleteNotification } = useContext(NotificationContext)
  return (
    <div>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          title={notification.title}
          message={notification.message}
          onClose={deleteNotification}
        />
      ))}
    </div>
  )
}

export default Notifications
