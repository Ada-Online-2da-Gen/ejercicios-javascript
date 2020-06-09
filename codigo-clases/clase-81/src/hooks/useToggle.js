import { useState } from 'react'

const useToggle = (initialValue = true) => {
  const [isVisible, setIsVisible] = useState(initialValue)
  const toggle = () => setIsVisible(!isVisible)

  return [isVisible, toggle]
}

export default useToggle
