import React, { useState } from 'react'
import ScorePlayer from 'components/ScorePlayer'
import 'styles.css'

const initialPlayers = [
  {
    id: 0,
    score: 0,
    name: 'Jeff',
  },
  {
    id: 1,
    score: 0,
    name: 'Abed',
  },
  {
    id: 2,
    score: 0,
    name: 'Annie',
  },
  {
    id: 3,
    score: 0,
    name: 'Shirley',
  },
]

const App = () => {
  const [players, setPlayers] = useState(initialPlayers)

  const changeScore = (score, id) => {
    console.log(score)
    const updatedPlayers = [...players]
    updatedPlayers[id].score = score
    setPlayers(updatedPlayers)
  }

  return (
    <>
      {players.map((player) => (
        <ScorePlayer
          key={player.id}
          id={player.id}
          defaultPlayer={player.name}
          current={player.score}
          onChangeScore={changeScore}
        />
      ))}
    </>
  )
}

export default App
