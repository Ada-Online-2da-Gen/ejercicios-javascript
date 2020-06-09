import React from 'react'
import useCounter from 'hooks/useCounter'

const Counter = () => {
  const { counter, decreaseCounter, increaseCounter } = useCounter(10)

  return (
    <>
      <p>{counter}</p>
      <a href='#' onClick={decreaseCounter}>
        Disminuir
      </a>
      <a href='#' onClick={increaseCounter}>
        Incrementar
      </a>
    </>
  )
}

export default Counter
