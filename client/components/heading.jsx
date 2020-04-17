import React from 'react'

export default function Heading(props) {
  return (
    <>
      <div className="heading">
        {
          props.username
            ? `${props.username} recommends`
            : 'Recommend a song'
        }
      </div>
      <style jsx>
        {`
      .heading {
        text-align: center;
        font-size: 2rem;
      }
    `}
      </style>
    </>
  )
}
