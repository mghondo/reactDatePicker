import React, { useState } from "react";
import DatePicker from "react-datepicker";

const MinMaxDate = () => {
  const [date, setDate] = useState(new Date());
  const days = 30;
  const today = new Date();
  const laterDate = new Date(new Date().setDate(today.getDate() + days));
  const minDate = date.setDate(5);
  const maxDate = date.setDate(45);
  console.log(minDate);
  return (
    <div>
      <h2>Min and Max Date</h2>
      <p>
        <strong>Min Date: </strong>
        {today.toLocaleString()}
      </p>
      <p>
        <strong>Max Date: </strong>
        {laterDate.toLocaleString()} ({days} days from now.)
      </p>
      <DatePicker
        value={date}
        onChange={setDate}
        minDate={today}
        maxDate={laterDate}
        placeholderText={today}
      />
    </div>
  );
};

export default MinMaxDate;
