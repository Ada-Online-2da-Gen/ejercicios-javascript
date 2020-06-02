import React from 'react'

const Player = ({ song }) => {
  const { title, author } = song
  return (
    <div>
      <h2>Player</h2>
      <p>
        Now playing: {title} from {author}
      </p>
    </div>
  )
}

export default Player
