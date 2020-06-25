import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1)
      console.log('Me sigo ejecutando')
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  return <h1>{time}</h1>
}

const AppEjemplo = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    console.log('Click!')
    setVisible(!visible)
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar</button>
      {visible && <Timer />}
    </div>
  )
}

export default AppEjemplo
