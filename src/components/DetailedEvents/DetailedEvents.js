import React,{useState} from 'react'
import './DetailedEvents.css'

export default function DetailedEvents() {

    const[eventDay, setEventDay] = useState(1);



  return (
    <div className='detailedEve'>
      <div className='head'>
        <h1>EVENTS</h1>
      </div>

      <div className='days'>
        <span className={eventDay===1 ? 'eveDay eveDay-active' : 'eveDay'} onClick={()=>{setEventDay(1)}}>Day 1</span>
        <span className={eventDay===2 ? 'eveDay eveDay-active' : 'eveDay'} onClick={()=>{setEventDay(2)}}>Day 2</span>
        <span className={eventDay===3 ? 'eveDay eveDay-active' : 'eveDay'} onClick={()=>{setEventDay(3)}}>Day 3</span>
      </div>
    </div>
  )
}
