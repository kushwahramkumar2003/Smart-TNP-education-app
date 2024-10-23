import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import Class from "../../ui/Class.tsx";
import { Link} from "react-router-dom";
import Calendar from "@/components/CalenderComponents/Calender.tsx";

function DashboardLayout() {
  const [isTfiColored, setIsTfiColored] = useState(false);
  const [isRxClored, setIsRxClored] = useState(true);

  function changebg(icon: string) {
    if (icon === "TfiMenuAlt") {
      setIsTfiColored(true);
      setIsRxClored(false);
    } else if (icon === "RxDashboard") {
      setIsTfiColored(false);
      setIsRxClored(true);
    }
  }
  
  let today = new Date(); 
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex row-auto gap-2">
            <p
              className="hover:bg-sky-200 rounded-xl text-center px-3 py-2 hover:text-blue-500 mx-0 cursor-pointer"
              onClick={() => changebg("TfiMenuAlt")}
            >
              Live Event
            </p>
            <p className="hover:bg-sky-200 rounded-xl text-center px-3 py-2 hover:text-blue-500 cursor-pointer">
              Class
            </p>
          </div>
          <div className="bg-white rounded-xl flex flex-row gap-2 items-center px-2 py-2">
           <Link to='/dashboard-bottom-menu'>
           <div
              style={{backgroundColor: isTfiColored ? "#E11D48" : "" }}
              className={`rounded-xl px-3 py-1 ${isTfiColored ? 'text-white' : 'text-black'}`}
              onClick={() => changebg("TfiMenuAlt")}
            >
              <TfiMenuAlt className="" size={27} />
            </div>
            </Link>
            <Link to='/dashboard-bottom-menu'>
            <div
              style={{ backgroundColor: isRxClored ? "#E11D48" : "" }}
              className={`rounded-xl px-3 py-1 ${isRxClored ? 'text-white' : 'text-black'}`}
              onClick={() => changebg("RxDashboard")}
            >
              <RxDashboard className="cursor-pointer" size={27} />
            </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-4 py-4">
          <Class selectedDay={today} selectedDaySchedules={[]}></Class>
          <Calendar></Calendar>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
