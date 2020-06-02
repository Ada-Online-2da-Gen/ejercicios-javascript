import React from 'react'

const Song = ({ id, title, author, onSongSelected }) => {
  return (
    <li onClick={() => onSongSelected(id)}>
      {title} - {author}
    </li>
  )
}

export default Song
