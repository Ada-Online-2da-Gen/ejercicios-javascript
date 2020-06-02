import React, { useState } from 'react'
import PlaylistInfo from 'componentes/PlaylistInfo'
import Playlist from 'componentes/Playlist'
import Player from 'componentes/Player'

import playlist from 'playlist'

const App = () => {
  const [currentSong, setCurrentSong] = useState(playlist.songs[0])

  const playSong = (id) => {
    const song = playlist.songs.find((song) => song.id === id)
    setCurrentSong(song)
  }

  return (
    <>
      <PlaylistInfo info={playlist.info} />
      <Playlist songs={playlist.songs} onSongSelected={playSong} />
      <Player song={currentSong} />
    </>
  )
}

export default App
