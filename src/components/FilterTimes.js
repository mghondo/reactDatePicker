import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const FilterTimes = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <div className="col-sm-6 card">
      <br />
      <h2>Filtering Times</h2>
      <br />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

export default FilterTimes;
