import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const SelectTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Select Time</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <br />
      <br />
    </div>
  );
};

export default SelectTime;
