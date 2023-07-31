import React, { useState } from "react";
import DatePicker from "react-datepicker";

// basic Calendar Icon
function DatePicker1() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}

export default DatePicker1;
