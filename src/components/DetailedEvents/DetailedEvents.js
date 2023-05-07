import React,{useState} from 'react'
import './DetailedEvents.css'
import Cards from './Cards'

export default function DetailedEvents() {

  const arr = [
    {
      key: 1,
      day: 1,
      title: 'Event1',
      url: 'https://picsum.photos/id/26/600/400',
      desc: ''
    },
    {
      key: 2,
      day: 1,
      title: 'Event2',
      url: 'https://picsum.photos/id/96/600/400',
      desc: ''
    },
    {
      key: 3,
      day: 1,
      title: 'Event3',
      url: 'https://picsum.photos/id/46/600/400',
      desc: ''
    },
    {
      key: 4,
      day: 1,
      title: 'Event4',
      url: 'https://picsum.photos/id/91/600/400',
      desc: ''
    },
    {
      key: 5,
      day: 1,
      title: 'Event5',
      url: 'https://picsum.photos/id/235/600/400',
      desc: ''
    },
    {
      key: 6,
      day: 2,
      title: 'Event1',
      url: 'https://picsum.photos/id/126/600/400',
      desc: ''
    },
    {
      key: 7,
      day: 2,
      title: 'Event2',
      url: 'https://picsum.photos/id/196/600/400',
      desc: ''
    },
    {
      key: 8,
      day: 2,
      title: 'Event3',
      url: 'https://picsum.photos/id/146/600/400',
      desc: ''
    },
    {
      key: 9,
      day: 2,
      title: 'Event4',
      url: 'https://picsum.photos/id/191/600/400',
      desc: ''
    },
    {
      key: 10,
      day: 2,
      title: 'Event5',
      url: 'https://picsum.photos/id/135/600/400',
      desc: ''
    },
    {
      key: 11,
      day: 3,
      title: 'Event1',
      url: 'https://picsum.photos/id/5/600/400',
      desc: ''
    },
    {
      key: 12,
      day: 3,
      title: 'Event2',
      url: 'https://picsum.photos/id/296/600/400',
      desc: ''
    },
    {
      key: 13,
      day: 3,
      title: 'Event3',
      url: 'https://picsum.photos/id/8/600/400',
      desc: ''
    },
    {
      key: 14,
      day: 3,
      title: 'Event4',
      url: 'https://picsum.photos/id/291/600/400',
      desc: ''
    },
    {
      key: 15,
      day: 3,
      title: 'Event5',
      url: 'https://picsum.photos/id/35/600/400',
      desc: ''
    }

];

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

      <div className='eventCards'>
          {arr.filter(ev => ev.day === eventDay).map((bx)=>
            <Cards key = {bx.key} url={bx.url} title = {bx.title}/>
          )}
      </div>
    </div>
  )
}
