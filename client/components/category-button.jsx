import React from 'react'

export default function CategoryButton(props) {
  const { heading, color, active, switchView } = props
  let swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  if (!active) {
    swirlBackground = '/images/gray-swirl.png'
  }
  return (
    <div
      className='category-button d-flex justify-content-center align-items-center'
      onClick={() => switchView(heading)}
    >
      {heading}
      <style jsx>
        {`
          .category-button {
            background-image: url(${swirlBackground});
            width: 122px;
            height: 36px;
            color: white;
            border-radius: 25px;
            font-family: 'Roboto';
            box-shadow: 7px 13px 20px rgba(0, 0, 0, 0.25);
          }
          .category-button:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}
