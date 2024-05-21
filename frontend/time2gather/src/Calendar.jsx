import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClick = (day) => {
    // if (selectedDays.includes(day)) {
    //   setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    // } else {
    //   setSelectedDays([...selectedDays, day]);
    // }

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
      setSelectedDays([day]);
    } else {
      const range = [];
      const daysDiff = Math.abs((day.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
      for (let i = 0; i <= daysDiff; i++) {
        const nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + i);
        range.push(nextDay);
      }
      setEndDate(day);
      setSelectedDays(range);
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
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const totalDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    totalDays.forEach(day => days.push(new Date(today.getFullYear(), today.getMonth(), day)));

    for (const i of selectedDays) {
      console.log("SELECTED" + i);
    }
    days.map((day, index) => console.log(day));
  
    return (
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
