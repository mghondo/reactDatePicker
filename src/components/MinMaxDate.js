import React, { useState } from "react";
import DatePicker from "react-datepicker";

const MinMaxDate = () => {
  const [date, setDate] = useState(new Date());
  const days = 10;
  const today = new Date();
  const laterDate = new Date(new Date().setDate(today.getDate() + days));
  const minDate = date.setDate(5);
  const maxDate = date.setDate(45);
  console.log(minDate);
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Min and Max Date</h2>
      <p>
        <strong>Min Date: </strong>
        {today.toLocaleString()}
      </p>
      <p>
        <strong>Max Date: </strong>
        {laterDate.toLocaleString()} <strong>({days} days from now.)</strong>
      </p>
      <DatePicker
        value={date}
        onChange={setDate}
        minDate={today}
        maxDate={laterDate}
        placeholderText={today}
      />
      <br />
    </div>
  );
};

export default MinMaxDate;
