import React, { useState, createContext } from 'react'
import shortId from 'shortid'

const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = () => {
    const notification = {
      id: shortId.generate(),
      title: 'Notificación',
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis doloremque ipsam quia.',
    }
    setNotifications([...notifications, notification])
  }

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    )
    setNotifications(updatedNotifications)
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        deleteNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationProvider }
export default NotificationContext
