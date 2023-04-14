import React from 'react'
import EveHeader from './EventHeader/EveHeader'
import './Events.css'
import EventSlider from './EventSlider/EventSlider';

export default function Events() {
  return (
    <div className="eve">
      <EveHeader></EveHeader>
      <EventSlider></EventSlider>
    </div>
  );
}
                 