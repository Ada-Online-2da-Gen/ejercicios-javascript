import React, { useState } from 'react'

// Ada - 10 puntos [-][+]

const ScorePlayer = ({ id, defaultPlayer, current, onChangeScore }) => {
  const [player, setPlayer] = useState(defaultPlayer)
  const [isEditing, setIsEditing] = useState(false)

  // console.log(onChangeScore)

  const increaseScore = () => onChangeScore(current + 1, id)
  const decreaseScore = () => onChangeScore(current - 1, id)

  const changePlayer = (event) => setPlayer(event.target.value)

  const startEditing = () => setIsEditing(true)
  const finishEditing = (event) => event.key === 'Enter' && setIsEditing(false)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      {isEditing ? (
        <input
          value={player}
          onChange={changePlayer}
          onKeyPress={finishEditing}
        />
      ) : (
        <p onClick={startEditing}>{player}</p>
      )}
      <p>{current} puntos</p>
      <button onClick={decreaseScore}>-</button>
      <button onClick={increaseScore}>+</button>
    </div>
  )
}

export default ScorePlayer
