import React from 'react'
import Song from 'componentes/Song'

const Playlist = ({ songs, onSongSelected }) => {
  return (
    <ul>
      {songs.map((song) => (
        <Song
          key={song.id}
          id={song.id}
          title={song.title}
          author={song.author}
          onSongSelected={onSongSelected}
        />
      ))}
    </ul>
  )
}

export default Playlist
