import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CalenderOpenStateCallbacks = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Open State Callbacks</h2>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
      <br />
    </div>
  );
};

export default CalenderOpenStateCallbacks;
