import React from 'react'

export default function Heading(props) {
  return (
    <>
      <div className="heading mt-1">
        {
          props.username
            ? `${props.username} recommends`
            : props.heading
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
