import React from 'react'
import useCounter from 'hooks/useCounter'

const App = () => {
  const [pesos, decreasePesos, increasePesos] = useCounter()
  const [dolars, decreaseDolars, increaseDolars] = useCounter()

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>Pesos {pesos}</h2>
        <button onClick={decreasePesos}>-</button>
        <button onClick={increasePesos}>+</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>Dolares {dolars}</h2>
        <button onClick={decreaseDolars}>-</button>
        <button onClick={increaseDolars}>+</button>
      </div>
    </>
  )
}

export default App
