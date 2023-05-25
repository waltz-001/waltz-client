import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'



export default function Cards({key,id, title, url, startTime, endTime, date}){


  return (
    <span className='card-eve' style={{backgroundImage: `url(${url})`}}>
      <span className='details'>
        <div className='cardHead'>
          <h4>{title}</h4>
        </div>
        <div className="timings">
          <span>Date: {date}<sup>th</sup> May '23</span>
          <span>Start Time: {startTime}</span>
          <span>End Time: {endTime}</span>
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
