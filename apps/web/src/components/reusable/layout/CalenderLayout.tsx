// import "../../CalenderComponents/style.css";
// import Actions from "../../CalenderComponents/Actions";
// import CalendarComponent from "../../CalenderComponents/Calender";
// import Title from "../../CalenderComponents/Title";

// interface ICalendarProps {
//   setDate: any;
//   date: any;
//   selectRange: boolean;
//   setSelectRange: any;
// }

// const CustomCalendar = (props: ICalendarProps) => {
//   const { setDate, date, selectRange, setSelectRange } = props;
//   return (
//     <div style={{ display: "grid", placeItems: "center" }}>
//       <Title title={"Calendar"} />
//       <CalendarComponent
//         setDate={setDate}
//         date={date}
//         selectRange={selectRange}
//       />
//       <Actions
//         setDate={setDate}
//         date={date}
//         selectRange={selectRange}
//         setSelectRange={setSelectRange}
//       />
//     </div>
//   );
// };

// export default CustomCalendar;

// import React, { useState } from 'react';
import "../../CalenderComponents/style.css";
import CalendarComponent from "../../CalenderComponents/Calender";
import Actions from "../../CalenderComponents/Actions";
// import Title from "../../CalenderComponents/Title";

interface CustomCalendarProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  selectRange: boolean;
  setSelectRange: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  date,
  setDate,
  selectRange,
  setSelectRange,
}) => {
  // const [date, setDate] = useState(new Date());
  // const [selectRange, setSelectRange] = useState(false);
  
  return (
    <div>
      {/* Only render the CalendarComponent directly */}
      <div style={{ display: "grid", placeItems: "center" }}>
        {/* <Title title={"Calendar"} /> */}
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
    </div>
  );
};

export default CustomCalendar;
