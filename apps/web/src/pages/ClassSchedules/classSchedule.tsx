import { BsPerson } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import Calender from "../../components/CalenderComponents/Calender.tsx";
import LiveEvent from "../../components/core/ClassShcedules/Events.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TfiMenuAlt } from "react-icons/tfi";

const goalsStatusAndTypes = [
  {
    icon: (
      <div className="rounded-full bg-sky-400 p-1 text-white flex ">
        <span className="rounded-full bg-sky-700 p-1 flex">
          <BsPerson size={20} />
        </span>
      </div>
    ),
    type: "Personal",
    number: "8",
  },
  {
    icon: (
      <div className="rounded-full bg-orange-400 p-1 text-white flex">
        <span className="rounded-full bg-orange-700 p-1 flex">
          <HiOutlineChartPie size={20} />
        </span>
      </div>
    ),
    type: "Financial",
    number: "14",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-600 p-1 text-white flex">
        <span className="rounded-full bg-blue-900 p-1 flex">
          <HiOutlineShoppingBag size={20} />
        </span>
      </div>
    ),
    type: "Profesional",
    number: "9",
  },
  {
    icon: (
      <div className="rounded-full bg-yellow-300 p-1 text-white flex">
        <span className="rounded-full bg-yellow-600 p-1 flex">
          <IoMdTime size={20} />
        </span>
      </div>
    ),
    type: "On-Going",
    number: "4",
  },
  {
    icon: (
      <div className="rounded-full bg-teal-300 p-1 text-white flex">
        <span className="rounded-full bg-teal-600 p-1 flex">
          <MdOutlineTaskAlt size={20} />
        </span>
      </div>
    ),
    type: "Complete",
    number: "23",
  },
];

type GoalTypes = "Personal" | "Financial" | "Profesional" | "Live Event";
type GoalStatus = "On-Going" | "Complete" | "In Progress" | "Pending";
export interface DashboardItems {
  name: string;
  type: GoalTypes;
  start: Date;
  deadline: Date;
  status: GoalStatus;
}


const categories = ['All', 'OnGoing', 'InProgress', 'Complete'];
const ClassSchedule = () => {
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
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);``
  return (
    <div className="mt-3 flex flex-col pb-24">
      <h1 className="text-2xl font-semibold px-3 ">Class Schedule</h1>
      
      <div className="bg-white p-4 m-3 rounded-xl  flex gap-2 flex-col mt-4">
        <div className="flex flex-row justify-between">
       
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-3">
          {goalsStatusAndTypes.map((goal) => (
            <div
              className="flex flex-row justify-center items-center gap-3 max-sm:flex-col"
              key={goal.type}
            >
              {goal.icon}
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg opacity-35">{goal.type}</p>
                <p className="text-3xl font-semibold">{goal.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-lg font-semibold px-3 py-2">My Schedule</h3>
      <div className='flex justify-between'>
      <div className='mx-3 py-3 flex flex-row gap-4'>
        {categories.map(category => (
          <p
            key={category}
            className={`py-2 px-3 rounded-xl cursor-pointer ${selectedCategory === category
                ? 'bg-blue-200 text-blue-500'
                : 'hover:bg-blue-200 hover:text-blue-500'
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>
      <div className='mx-3 py-3 flex flex-row gap-4'>
    <div className="bg-white rounded-xl flex flex-row gap-2 items-center px-2 py-2">
           <Link to='/dashboard-bottom-menu'>
           <div
              style={{backgroundColor: isTfiColored ? "#44408A" : "" }}
              className={`rounded-xl px-3 py-1 ${isTfiColored ? 'text-white' : 'text-black'}`}
              onClick={() => changebg("TfiMenuAlt")}
            >
              <TfiMenuAlt className="" size={27} />
            </div>
            </Link>
            <Link to='/dashboard-bottom-menu'>
            <div
              style={{ backgroundColor: isRxClored ? "#44408A" : "" }}
              className={`rounded-xl px-3 py-1 ${isRxClored ? 'text-white' : 'text-black'}`}
              onClick={() => changebg("RxDashboard")}
            >
              <RxDashboard className="cursor-pointer" size={27} />
            </div>
            </Link>
          </div>
      
      </div>
      </div>
      <div className={"grid grid-cols-2 gap-6 mt-4 "}>
        <div>
          <div>
            <LiveEvent />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 mx-5">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
