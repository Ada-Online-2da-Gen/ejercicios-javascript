import React from 'react'
import useAppContext from 'contexts/AppContext'

const HeaderInfo = () => {
  const { title, setTitle } = useAppContext()

  return <h1>{title}</h1>
}

export default HeaderInfo
