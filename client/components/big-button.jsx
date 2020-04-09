import { useRouter } from 'next/router'
import Link from 'next/link'

export default function BigButton(props) {
  const { content, color, link, image } = props

  const router = useRouter()

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  return (
    <>
      <Link href={link}>
        <div className="swirl-button" type="submit">
          {
            image ? <img src={content}/> : content
          }
        </div>
      </Link>
      <style jsx>
        {
        `
        .swirl-button {
          background-image: url('${swirlBackground}');
        }
        `
        }
      </style>
    </>
  )

}
