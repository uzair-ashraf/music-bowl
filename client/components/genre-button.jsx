export default function GenreButton(props) {
  const { heading, color, onClick, genreId } = props

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  return (
    <>
      <div className="swirl-button genre-swirl-button"
        onClick={() => onClick(genreId)}
      >
        {heading}
      </div>
      <style jsx>
        {`
        .genre-swirl-button {
          background-image: url('${swirlBackground}');
          display:flex;
          justify-content: center;
          align-items: center;
          height: 128px;
          width: 128px;
          font-size: 1.3rem;
        }
        `}
      </style>
    </>
  )

}
