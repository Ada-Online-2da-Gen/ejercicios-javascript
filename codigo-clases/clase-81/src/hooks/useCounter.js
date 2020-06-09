import { useState } from 'react'

const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial)

  const decrease = () => setCount(count - 1)
  const increase = () => setCount(count + 1)

  return [count, decrease, increase]
}

export default useCounter
