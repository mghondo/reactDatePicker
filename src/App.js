import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DatePicker1 from "./components/DatePicker1";
import "react-datepicker/dist/react-datepicker.css";
import CalendarContainer1 from "./components/CalendarContainer1";
import CalenderOpenStateCallbacks from "./components/CalenderOpenStateCallbacks";
import MinMaxDate from "./components/MinMaxDate";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <h1>Date Picking Options</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker1></DatePicker1>
      <CalendarContainer1></CalendarContainer1>
      <CalenderOpenStateCallbacks></CalenderOpenStateCallbacks>
      <MinMaxDate></MinMaxDate>
    </div>
  );
}

export default App;
