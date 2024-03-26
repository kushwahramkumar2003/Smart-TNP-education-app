import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "./style.css";

interface CalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
}
const CalendarComponent = (props: CalendarProps) => {
  const { setDate, date, selectRange } = props;
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="calendar-container"
    >
      <Calendar onChange={setDate} value={date} selectRange={selectRange} />
    </motion.div>
  );
};

export default CalendarComponent;
