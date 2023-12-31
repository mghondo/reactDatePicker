import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

// basic Calendar Icon
function DatePicker1() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Date Picker with Icon</h2>
      <DatePicker
        customInput={<FaCalendarAlt />}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br />
    </div>
  );
}

export default DatePicker1;
