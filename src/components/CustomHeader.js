import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";

const CustomHeader = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  //   const years = range(1990, getYear(new Date()) + 1, 1);
  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   return (
  //     <div className="col-sm-4 card">
  //       <br />
  //       <h2>Date Picker with Icon</h2>
  //       <DatePicker
  //         renderCustomHeader={({
  //           date,
  //           changeYear,
  //           changeMonth,
  //           decreaseMonth,
  //           increaseMonth,
  //           prevMonthButtonDisabled,
  //           nextMonthButtonDisabled,
  //         }) => (
  //           <div
  //             style={{
  //               margin: 10,
  //               display: "flex",
  //               justifyContent: "center",
  //             }}
  //           >
  //             <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
  //               {"<"}
  //             </button>
  //             <select
  //               value={getYear(date)}
  //               onChange={({ target: { value } }) => changeYear(value)}
  //             >
  //               {years.map((option) => (
  //                 <option key={option} value={option}>
  //                   {option}
  //                 </option>
  //               ))}
  //             </select>
  //             <select
  //               value={months[getMonth(date)]}
  //               onChange={({ target: { value } }) =>
  //                 changeMonth(months.indexOf(value))
  //               }
  //             >
  //               {months.map((option) => (
  //                 <option key={option} value={option}>
  //                   {option}
  //                 </option>
  //               ))}
  //             </select>
  //             <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
  //               {">"}
  //             </button>
  //           </div>
  //         )}
  //         selected={startDate}
  //         onChange={(date) => setStartDate(date)}
  //       />
  //     </div>
  //   );
};
export default CustomHeader;
