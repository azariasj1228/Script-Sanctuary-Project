import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Handle the date selection logic here, e.g., display events for the selected date
  };

  return (
    <div className="custom-calendar">
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="react-calendar"
      />
      <div className="calendar-details">
        <h3>Events on {date.toDateString()}</h3>
        {/* Display events for the selected date */}
      </div>
    </div>
  );
};

export default CustomCalendar;
