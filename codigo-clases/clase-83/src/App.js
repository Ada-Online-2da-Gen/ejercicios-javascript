import React from 'react'
import Article from 'components/Article'
import Notifications from 'components/Notifications'
import { NotificationProvider } from './contexts/NotificationContext'

const App = () => {
  return (
    <NotificationProvider>
      <Article />
      <Notifications />
    </NotificationProvider>
  )
}

export default App
