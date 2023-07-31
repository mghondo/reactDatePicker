import React, { useState } from "react";
import DatePicker from "react-datepicker";

// basic Calendar Icon
function DatePicker1() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h2>Date Picker with Icon</h2>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default DatePicker1;
