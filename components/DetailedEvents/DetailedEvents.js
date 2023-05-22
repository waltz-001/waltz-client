import React, { useState, useContext, useEffect } from 'react'
import './DetailedEvents.css'
import Cards from './Cards';
import UserContext from "../../utils/UserContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function DetailedEvents() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [events, setEvents] = useState([])

  const [eventDay, setEventDay] = useState(1);
  { window.scrollTo(0, 0) };


  const getEvents = async () => {
    const res = await axios.get(
      "https://waltz-server.onrender.com/events",
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    setEvents(res.data.events)
    console.log(res)
  }

  useEffect(() => {
    try {
      if (user.token === "")
        navigate("/signin");

      getEvents()
    }
    catch (err) {
      console.log(err)
    }
  }, [1000])

  return (
    <div className='detailedEve'>
      <div className='head'>
        <h1>EVENTS</h1>
      </div>

      <div className='days'>
        <span className={eventDay - 24 === 1 ? 'eveDay eveDay-active' : 'eveDay'} onClick={() => { setEventDay(1) }}>Day 1</span>
        <span className={eventDay - 24 === 2 ? 'eveDay eveDay-active' : 'eveDay'} onClick={() => { setEventDay(2) }}>Day 2</span>
        <span className={eventDay - 24 === 3 ? 'eveDay eveDay-active' : 'eveDay'} onClick={() => { setEventDay(3) }}>Day 3</span>
      </div>

      <div className='eventCards'>
        {
          events.length === 0 ?
            <p>Events will be scheduled soon stay tuned</p> : 
              events.filter(ev => ev.date - 24 === eventDay).map((bx) =>
                <Cards key={bx.key} url={bx.imageUrl} title={bx.title} desc={bx.description} startTime={bx.startTime} endTime={bx.endTime} />
              )
        }
      </div>
    </div>
  )
}
