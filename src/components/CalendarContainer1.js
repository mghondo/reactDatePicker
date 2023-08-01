import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";

const CalendarContainer1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <h2>Calendar Container</h2>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Calendar Container</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarContainer={MyContainer}
      />
      <br />
    </div>
  );
};

export default CalendarContainer1;
