import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DatePicker1 from "./components/DatePicker1";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker1></DatePicker1>
    </div>
  );
}

export default App;
