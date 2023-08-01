import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

const ClearInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Open State Callbacks</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        isClearable
        placeholderText="I have been cleared!"
      />
      <br />
    </div>
  );
};

export default ClearInput;
