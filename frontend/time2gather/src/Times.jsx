import React, { useState } from 'react';
import './timesStyle.css'

function TimeDropdown() {
  const [startTime, setStartTime] = useState('12:00 AM');
  const [endTime, setEndTime] = useState('12:00 AM');

  const generateTimeOptions = () => {
    const options = [];
    let period = 'am'
    for (let i = 11; i < 36; i++) {
      if (i == 23) period = 'pm';
      if (i == 35) period = 'am';
      options.push(`${i % 12 + 1}:00 ${period}`)
    }
    return options;
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const timeOptions = generateTimeOptions();

  return (
    <div id="time-container">
      <div className="time-select">
        <label htmlFor="start-time">Start Time: </label>
        <select id="start-time" value={startTime} onChange={handleStartTimeChange}>
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="time-select">
        <label htmlFor="end-time">End Time: </label>
        <select id="end-time" value={endTime} onChange={handleEndTimeChange}>
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TimeDropdown;
