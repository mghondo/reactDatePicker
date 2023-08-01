import React, { useState } from "react";
import DatePicker from "react-datepicker";

// basic Calendar Icon
function DatePicker1() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Date Picker with Icon</h2>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br />
    </div>
  );
}

export default DatePicker1;
