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
import { useState } from "react";
import "../CalenderComponents/style.css";
// import { Calendar } from "../../components/CalenderComponents/index";
import CustomCalendar from "./layout/CalenderLayout"
// import { CalendarCheck } from "lucide-react";
function CalendarChec() {
  const [date, setDate] = useState<any>(new Date());
  const [selectRange, setSelectRange] = useState<boolean>(false);
  return (
    <div className="" style={{ display: "grid", placeItems: "center" }}>
      <CustomCalendar
        date={date}
        setDate={setDate}
        selectRange={selectRange}
        setSelectRange={setSelectRange}
      />
    </div>
  );
}

export default CalendarChec;
