// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function BigButton(props) {
  const { content, color, link, image, profileImage, className } = props

  // const router = useRouter()

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  return (
    <>
      <Link href={link}>
        <div className={`swirl-button ${className || ''}`}

        >
          {
            image ? <img
              className={profileImage ? 'profile-image' : ''}
              src={content}/> : content
          }
        </div>
      </Link>
      <style jsx>
        {`
        .swirl-button {
          background-image: url('${swirlBackground}');
          }
        .profile-image {
          max-height: 80%;
          max-width: 80%;
          border-radius: 50%;
        }
        .swirl-button:hover {
          cursor: pointer;
        }
        }
        `}
      </style>
    </>
  )

}
