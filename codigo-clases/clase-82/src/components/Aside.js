import React, { useContext } from 'react'
// import AppContext from 'contexts/AppContext'
import useAppContext from 'contexts/AppContext'

const Aside = () => {
  // const { title, setTitle } = useContext(AppContext)
  const { title, setTitle } = useAppContext()

  const handleChange = (event) => setTitle(event.target.value)

  return (
    <div>
      <input value={title} onChange={handleChange} />
    </div>
  )
}

export default Aside
