import "../../CalenderComponents/style.css";
import Actions from "../../CalenderComponents/Actions";
import CalendarComponent from "../../CalenderComponents/Calender";
import Title from "../../CalenderComponents/Title";

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
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
  );
};

export default CustomCalendar;
