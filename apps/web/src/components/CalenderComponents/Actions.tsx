import { motion } from "framer-motion";
import "../CalenderComponents/style.css";
interface ActionProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}
const Actions = (props: ActionProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
    >
      {date.length > 0 && selectRange ? (
        <p className="text-center">
          {date[0].toDateString()}
          &nbsp;-&nbsp;
          {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">{date.toDateString()}</p>
      )}
      <button
        style={{
          color: selectRange ? "#6f48eb" : "#524d4d",
          cursor: "pointer",
          marginTop: "1rem",
          width: "10rem",
          height: "3rem",
          border: "none",
          outline: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "0.5rem",
          boxShadow: "0 12px 14px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => {
          setSelectRange(!selectRange);
          setDate(new Date());
        }}
      >
        Select Range
      </button>
    </motion.div>
  );
};

export default Actions;
