import React, { useState } from 'react';
import './calendarStyle.css';

const Calendar = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date state

  const handleClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
      setSelectedDays([day]);
    } else {
      const range = [];
      const daysDiff = Math.abs((day.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
      if (daysDiff < 7 && day.getTime() - startDate.getTime() > 0) {
        for (let i = 0; i <= daysDiff; i++) {
          const nextDay = new Date(startDate);
          nextDay.setDate(startDate.getDate() + i);
          range.push(nextDay);
        }
        setEndDate(day);
        setSelectedDays(range);
      } 
    }
  };

  const isSelected = (day) => {
    if (!day) return false;
    for (const s of selectedDays) {
      if (s.toDateString() == day.toDateString()) return true;
    }
    return false;
  }

  const renderCalendar = () => {
    const today = currentDate; // Use currentDate instead of new Date()
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const totalDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const days = [];
    for (let i = 1; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    totalDays.forEach(day => days.push(new Date(today.getFullYear(), today.getMonth(), day)));

    return (
      <div>
        <h3 style={{ color: "#eeee", fontFamily: "sans-serif" }}>{today.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
        <div id="month-nav">
          <button onClick={() => setCurrentDate(new Date(today.getFullYear(), today.getMonth() - 1, 1))}>
            Previous Month
          </button>
          <button onClick={() => setCurrentDate(new Date(today.getFullYear(), today.getMonth() + 1, 1))}>
            Next Month
          </button>
        </div>
        <div className="calendar">
          {days.map((day, index) => (
            <div
              key={index}
              className={`day ${day ? 'active' : 'inactive'} ${isSelected(day) ? 'selected' : 'bruh'}`}
              onClick={() => day && handleClick(day)}>
              {day ? day.getDate() : ''}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  return (
    <div>
      {renderCalendar()}
      <div>
        <p>Selected Days:</p>
        {selectedDays.map((day, index) => (
          <span key={index}>{day.toDateString()}</span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
