import React from 'react'

const PlaylistInfo = ({ info }) => {
  const { title, author, genre, songs } = info
  return (
    <div>
      <h2>{title}</h2>
      <p>From {author}</p>
      <p>Genre: {genre}</p>
      <small>{songs} songs</small>
    </div>
  )
}

export default PlaylistInfo
