import Link from 'next/link'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import FavoriteIcon from '@material-ui/icons/Favorite'

export default function MedButton(props) {
  const { icon, subheading, color, link } = props

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  const iconTable = {
    upload: <AddCircleOutlineIcon/>,
    search: <SearchIcon/>,
    account: <AccountCircleIcon/>,
    settings: <SettingsIcon/>,
    library: <LibraryMusicIcon/>,
    discover: <FavoriteIcon/>
  }
  return (
    <>
      <Link href={link}>
        <div className="swirl-button med-swirl-button" type="submit">
          {
            iconTable[icon]
          }
          <div className="swirl-subheading">
            {
              subheading
            }
          </div>
        </div>
      </Link>
      <style jsx>
        {`
        .med-swirl-button {
          background-image: url('${swirlBackground}');
          position: relative;
          height: 128px;
          width: 128px;
          -webkit-appearance: none;
        }
        .swirl-subheading {
          position: absolute;
          font-size: .8rem !important;
          bottom: 8px;
        }
        `}
      </style>
    </>
  )

}
