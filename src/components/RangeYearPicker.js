import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const RangeYearPicker = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2024/04/08"));
  return (
    <>
      <div className="col-sm-6 card">
        <br />
        <h2>Select Year</h2>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy"
          showYearPicker
        />
        <br />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy"
          showYearPicker
        />
        <br />
      </div>
    </>
  );
};

export default RangeYearPicker;
