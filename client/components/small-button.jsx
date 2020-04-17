export default function SmallButton(props) {
  const { icon, heading, color, onClick } = props

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  return (
    <>
      <div
        className="swirl-button small-swirl-button"
        onClick={onClick}
      >
        {
          heading
        }
      </div>
      <style jsx>
        {`
        .small-swirl-button {
          background-image: url('${swirlBackground}');
          height: 85px;
          width: 85px;
          font-size: 1rem;
        }
        `}
      </style>
    </>
  )

}
