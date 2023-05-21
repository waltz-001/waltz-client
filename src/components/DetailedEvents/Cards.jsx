import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'



export default function Cards({key,id, title, url, desc}){


  return (
    <span className='card' style={{backgroundImage: `url(${url})`}}>
      <span className='details'>
        <div className='cardHead'>
          <h4>{title}</h4>
        </div>
        <div className='cardBtn'>
          <Link to = {`/detailedEvents/viewEvent/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </span>
    </span>
  )
}
