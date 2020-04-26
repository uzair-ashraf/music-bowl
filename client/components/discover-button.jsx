import SkipNextIcon from '@material-ui/icons/SkipNext'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AutorenewIcon from '@material-ui/icons/Autorenew'

export default function DiscoverButton(props) {
  const { icon, heading, color, onClick, disabled } = props

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  const iconTable = {
    songskip: <SkipNextIcon />,
    favorite: <FavoriteIcon />,
    newgenre: <AutorenewIcon />
  }
  return (
    <>
      <div
        className={`
        swirl-button small-swirl-button text-center ${disabled ? 'disabled' : ''}
        `}
        onClick={disabled ? null : onClick}
      >
        {iconTable[icon]}
        <div className="swirl-subheading">
          {heading}
        </div>

      </div>
      <style jsx>
        {`
        .small-swirl-button {
          background-image: url('${swirlBackground}');
          height: 100px;
          width: 100px;
          font-size: 1.1rem;
          position: relative;
        }
        .swirl-subheading {
          position: absolute;
          font-size: .8rem !important;
          bottom: 8px;
        }
        .disabled {
          background-image: url('/images/gray-swirl.png')
        }
        .disabled:hover {
          cursor: not-allowed;
        }
        `}
      </style>
    </>
  )

}
