import React from 'react'

export default function SpotifyPlayer(props) {
  const { uri, view, theme, width, height } = props
  return (
    <iframe
      src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
      width={width}
      height={height}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media" />
  )
}
