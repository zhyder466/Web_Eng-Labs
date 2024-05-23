import React, { useState, useEffect } from 'react';
import './LiveTime.css';
function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="live-time-container">
      <h2 className="live-time-heading">Current Time:</h2>
      <p className="live-time">{formattedTime}</p>
    </div>
  );
}

export default LiveTime;
