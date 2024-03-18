import { RxDashboard } from "react-icons/rx";
import { GoGoal } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { GoFileDirectory } from "react-icons/go";
export const menuItems = [
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
