import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "May, 26, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <div className='timer-count'>
        {days}
        <p>Days</p>
      </div>
      <div className='timer-count'>
        {hours}
        <p>Hrs</p>
      </div>
      <div className='timer-count'>
        {minutes}
        <p>Mins</p>
      </div>
      <div className='timer-count'>
        {seconds}
        <p>Secs</p>
      </div>
    </div>
  );
};

export default Timer;