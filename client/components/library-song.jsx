/* eslint-disable camelcase */
import React from 'react'
import YouTube from 'react-youtube'
import SpotifyPlayer from '../components/spotify-player'

export default function LibrarySong(props) {
  const { title, song_id, selectSong, isOpen, provider_name, video_id } = props
  return (
    <div
      className='library-song text-center m-1 p-2 text-truncate'
      onClick={() => selectSong(song_id)}
    >
      {
        isOpen
          ? (
            <div>
              {
                provider_name === 'youtube'
                  ? (
                    <YouTube
                      videoId={video_id}
                      opts={{
                        height: '160',
                        width: '100%'
                      }}
                    />
                  )
                  : (
                    <SpotifyPlayer
                      uri={video_id}
                      view='list'
                      theme='black'
                      width='100%'
                      height='160'
                    />
                  )
              }
            </div>
          )
          : (
            title
          )
      }
      <style jsx>
        {`
          .library-song {
            border: 1px solid lightgrey;
            -webkit-box-shadow: 17px 17px 21px -2px rgba(0,0,0,0.11);
            -moz-box-shadow: 17px 17px 21px -2px rgba(0,0,0,0.11);
            box-shadow: 17px 17px 21px -2px rgba(0,0,0,0.11);
            border-radius: 8px;
          }
          .library-song:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}
