import React from 'react'
import './Cards.css'

const Cards = ({title,url,desc}) => {
  return (
    <span className='card' style={{backgroundImage: `url(${url})`}}>
      <span className='details'>
        <div className='cardHead'>
          <h4>{title}</h4>
        </div>
        <div className='cardPara'>
          <p>{desc}</p>
        </div>
        <div className='cardBtn'>
          <button>View Details</button>
        </div>
      </span>
    </span>
  )
}

export default Cards
