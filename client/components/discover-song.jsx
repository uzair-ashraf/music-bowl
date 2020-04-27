/* eslint-disable camelcase */
import YouTube from 'react-youtube'
import SpotifyPlayer from '../components/spotify-player'

export default function DiscoverSong(props) {
  const {
    provider_name,
    video_id,
    title,
    genre
  } = props
  return (
    <>
      {
        provider_name === 'youtube'
          ? (
            <div className="player-container mt-1">
              <YouTube
                videoId={video_id}
                opts={{
                  height: '200',
                  width: '100%'
                }}
              />
            </div>
          )
          : (
            <div className="player-container mt-1">
              <SpotifyPlayer
                uri={video_id}
                view='list'
                theme='black'
                width='100%'
                height='200'
              />
            </div>
          )
      }
      <div
        className='text-center text-truncate font-weight-bold m-2'
      >
        {title}
      </div>
      <table className="table table-sm text-center">
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
    </>
  )
}
