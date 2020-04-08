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
          border-radius: 50%;
          height: 160px;
          width: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          margin-top: 2rem;
          color: white;
          font-family: 'Roboto';
          font-size: 2.8rem;
          box-shadow: 7px 13px 20px rgba(0, 0, 0, 0.25);
        }
        `
        }
      </style>
    </>
  )

}
