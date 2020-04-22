/* eslint-disable camelcase */
import React from 'react'
import YouTube from 'react-youtube'
import SpotifyPlayer from '../components/spotify-player'
import SmallButton from '../components/small-button'

export default function LibrarySong(props) {
  const {
    title,
    song_id,
    selectSong,
    deleteSong,
    isOpen,
    provider_name,
    video_id,
    genre
  } = props
  return (
    <div
      className='library-song text-center m-1 p-2 text-truncate'
      onClick={() => selectSong(isOpen ? null : song_id)}
    >
      {
        isOpen
          ? (
            <div>
              <div className={`library-song-title text-truncate m-2 ${isOpen ? 'font-weight-bold' : ''}`}
              >
                {title}
              </div>
              <div className="library-song-embeded">
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
              <div className="library-song-control">
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Service</th>
                      <td className="text-capitalize">{provider_name}</td>
                    </tr>
                    <tr>
                      <th scope="row">Genre</th>
                      <td>{genre}</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  className='delete-button d-flex justify-content-center align-items-center m-1 mx-auto'
                  onClick={e => deleteSong(e, song_id)}
                >
                  Delete
                </div>
              </div>
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
          .delete-button {
            background-image: url('/images/purp-swirl.png');
            width: 122px;
            height: 36px;
            color: white;
            border-radius: 25px;
            font-family: 'Roboto';
            box-shadow: 7px 13px 20px rgba(0, 0, 0, 0.25);
          }
          .delete-button:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}
