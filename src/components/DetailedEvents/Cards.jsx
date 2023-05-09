import React from 'react'
import './Cards.css'

const Cards = ({title,url,desc}) => {
  return (
    <span className='card' style={{backgroundImage: `url(${url})`}}>
      <span className='details'>
        <h4>{title}</h4>
        <p>{desc}</p>
        <button>View Details</button>
      </span>
    </span>
  )
}

export default Cards
