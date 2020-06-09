import React from 'react'
import useToggle from 'hooks/useToggle'

const Toggle = () => {
  const [isTextVisible, toggleText] = useToggle()
  const [isLinkVisible, toggleLink] = useToggle(false)

  return (
    <>
      <button onClick={toggleText}>Toggle Text</button>
      {isTextVisible && <p>lorem ipsum facto blablbalbla...</p>}

      <button onClick={toggleLink}>Toggle Link</button>
      {isLinkVisible && <a href='#'>Link</a>}
    </>
  )
}

export default Toggle
