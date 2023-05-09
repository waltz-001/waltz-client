import React from 'react'
import EveHeader from './EventHeader/EveHeader'
import './Events.css'
import EventSlider from './EventSlider/EventSlider';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div className="eve">
      <EveHeader></EveHeader>
      <EventSlider></EventSlider>
      <div className="cont">
        <Link to="/detailedEvents">
          <button className='button'>
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
}
                 