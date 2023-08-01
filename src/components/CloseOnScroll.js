import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CloseOnScroll = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dateNow = new Date();
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Close on Scroll</h2>
      <p>When scrolling down the popup will disappear.</p>
      <DatePicker
        closeOnScroll={true}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText={dateNow}
      />
      <br />
    </div>
  );
};

export default CloseOnScroll;
