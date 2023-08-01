import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DatePicker1 from "./components/DatePicker1";
import "react-datepicker/dist/react-datepicker.css";
import CalendarContainer1 from "./components/CalendarContainer1";
import CalenderOpenStateCallbacks from "./components/CalenderOpenStateCallbacks";
import MinMaxDate from "./components/MinMaxDate";
import CloseOnScroll from "./components/CloseOnScroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CustomHeader from "./components/CustomHeader";
import FilterTimes from "./components/FilterTimes";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App container">
      <div className="row">
        <div className="col-sm-12 card">
          <h1>Date Picking Options</h1>
          <br />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <br />
        </div>
        <br />
        <DatePicker1></DatePicker1>
        <CalendarContainer1></CalendarContainer1>
        <CalenderOpenStateCallbacks></CalenderOpenStateCallbacks>
        <MinMaxDate></MinMaxDate>
        <CloseOnScroll></CloseOnScroll>
        <CustomHeader></CustomHeader>
        <FilterTimes></FilterTimes>
      </div>
    </div>
  );
}

export default App;
