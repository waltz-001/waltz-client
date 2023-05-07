import React from 'react'

const Cards = ({title,url}) => {
  return (
    <span style={{backgroundImage: `url(${url})`}}>
      {title}
    </span>
  )
}

export default Cards
