// import React, { useState } from "react";
// import { Calendar } from 'primereact/calendar';

// export default function InlineDemo() {
//     const [date, setDate] = useState(new Date(2024, 3, 10)); 
//     const handleDateChange = (e) => {
//         setDate(e.target.value);
//     };


//     return (
//         <div className="py-4  flex justify-center items-center w-1/2 bg-gray-300">
//         <div className="p-2 bg-white rounded shadow-md">
//             <h2 className="text-sm font-bold">Select Date</h2>
//             <Calendar value={date} onChange={handleDateChange} inline showWeek />
//         </div>
//     </div>
//     );
// }
import "src/App.css";
import Actions from "./Partials/Actions";
import CalendarComponent from "./Partials/Calendar";
import Title from "./Partials/Title";

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
    <div style={{ width: "80vw", display: "grid", placeItems: "center" }}>
      <Title title={"Calendar"} />
      <CalendarComponent
        setDate={setDate}
        date={date}
        selectRange={selectRange}
      />
      <Actions
        setDate={setDate}
        date={date}
        selectRange={selectRange}
        setSelectRange={setSelectRange}
      />
    </div>
  );
};

export default CustomCalendar;

