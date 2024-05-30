import { BsPerson } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import Calender from "../../components/CalenderComponents/Calender.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select.tsx";
import LiveEvent from "../../components/core/LiveSchedules/LiveEvent.tsx";
import DayWiseSchedule from "../../components/core/LiveSchedules/DayWiseSchedule.tsx";

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



const ClassSchedule = () => {
  return (
    <div className="mt-3 flex flex-col">
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

      <div className={"grid grid-cols-2 gap-6 mt-4 "}>
        <div>
          <div className="">
            <Calender />
          </div>
          <div>
            <div className={"flex flex-row justify-between my-4"}>
              <h2 className={"text-lg my-3 px-3 font-semibold "}>Upcoming Live Event</h2>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    defaultChecked={true}
                    placeholder="Select a Categorie"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">All</SelectItem>
                    <SelectItem value="banana">C1</SelectItem>
                    <SelectItem value="blueberry">C2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <LiveEvent />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 mx-5">
          <DayWiseSchedule />
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
