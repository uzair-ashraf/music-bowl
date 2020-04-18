export default function SmallButton(props) {
  const { icon, heading, color, onClick, disabled } = props

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  return (
    <>
      <div
        className={`
        swirl-button small-swirl-button ${disabled ? 'disabled' : ''}
        `}
        onClick={disabled ? null : onClick}
      >
        {
          heading
        }
      </div>
      <style jsx>
        {`
        .small-swirl-button {
          background-image: url('${swirlBackground}');
          height: 100px;
          width: 100px;
          font-size: 1.1rem;
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
