import { AiFillDashboard } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GoGoal } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { GoFileDirectory } from "react-icons/go";
import { Link } from "react-router-dom";

const menuItems = [
  {
    icon: <RxDashboard size={25} />,
    title: "Dashboard",
    to: "/",
  },
  {
    icon: <GoGoal size={25} />,
    title: "Goals",
    to: "/goals",
  },
  {
    icon: <IoVideocamOutline size={25} />,
    title: "Live Schedule",
    to: "/schedule",
  },
  {
    icon: <AiOutlineSchedule size={25} />,
    title: "Class Schedule",
    to: "/class",
  },
  {
    icon: <IoBookmarkOutline size={25} />,
    title: "Course",
    to: "/course",
  },
  {
    icon: <GrResources size={25} />,
    title: "Resources",
    to: "/resources",
  },
  {
    icon: <GoFileDirectory size={25} />,
    title: "Directory",
    to: "/directory",
  },
];
const SideMenuBar = () => {
  return (
    <div
      className={
        "w-60 bg-primary text-white max-h-screen flex transition-all duration-500 h-screen dark:bg-gray-900"
      }
    >
      <div className={"flex flex-col pt-6 pl-4 gap-6"}>
        <div className={"flex flex-row gap-2 text-white items-center"}>
          <span>
            <AiFillDashboard size={25} />
          </span>
          <p className={"text-xl font-semibold "}>Dashboard</p>
        </div>
        {menuItems.map((menuItem) => (
          <Link
            key={menuItem.title}
            to={menuItem.to}
            className={
              "hover:bg-white rounded-lg p-2 transition-all duration-200 hover:text-primary dark:hover:bg-primary dark:hover:text-white"
            }
          >
            <div
              className={
                "gap-2 flex flex-row justify-start items-center text-center"
              }
            >
              {menuItem.icon}
              <p className={"text-lg "}>{menuItem.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideMenuBar;
