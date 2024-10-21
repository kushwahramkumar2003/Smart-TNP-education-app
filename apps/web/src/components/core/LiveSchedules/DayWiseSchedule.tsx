import Dropdown from "@/components/ui/dropDown.tsx";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../ui/select.tsx";
import DayScheduleCard from "./DayScheduleCard.tsx";

enum ScheduleType {
  "Personal" = "Personal",
  "Coding" = "Coding",
  "Communication" = "Communication",
}
export interface ScheduleSchema {
  scheduled: boolean;
  time: Date;
  title?: string;
  type?: ScheduleType;
  duration?: number;
}

const DayWiseSchedule = () => {
  return (
    <div>
      <div className={"flex flex-row justify-between items-center "}>
        <h1 className={"text-lg font-semibold mb-2"}>Wednesday, 5 April 2024</h1>
        <Dropdown></Dropdown>
      </div>
      <div className={"px-3 flex flex-col gap-4 my-6"}>
        {ScheduleData.map((ScheduleDatum) => (
          <DayScheduleCard data={ScheduleDatum} />
        ))}
      </div>
    </div>
  );
};

const ScheduleData: ScheduleSchema[] = [
  {
    time: new Date(Date.now() + 3600000),
    scheduled: true,
    title: "Java coding class",
    type: ScheduleType.Coding,
    duration: 1800000,
  },
  {
    time: new Date(Date.now() + 7200000),
    scheduled: true,
    title: "AWS Cloud class",
    type: ScheduleType.Coding,
    duration: 1800000,
  },
  {
    scheduled: false,
    time: new Date(Date.now() + 3600000 * 3),
  },
  {
    scheduled: false,
    time: new Date(Date.now() + 3600000 * 4),
  },
  {
    scheduled: false,
    time: new Date(Date.now() + 3600000 * 5),
  },
  {
    scheduled: false,
    time: new Date(Date.now() + 3600000 * 6),
  },
];

export default DayWiseSchedule;
