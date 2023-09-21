import React from 'react';
import { useTime } from 'react-timer-hook';
import './MyTime.css'

export default function MyTime() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour'});

  return (
    <div className='time' style={{textAlign: 'center'}}>
      <h1>Current Time</h1>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
      </div>
    </div>
  );
}