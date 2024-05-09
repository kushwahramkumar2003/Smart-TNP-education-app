import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select.tsx";
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
      <div className={"flex flex-row justify-between items-center"}>
        <h1 className={"text-lg font-semibold"}>Wednesday, 5 April 2024</h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue defaultChecked={true} placeholder="Select a filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Daily</SelectItem>
              <SelectItem value="banana">Weekly</SelectItem>
              <SelectItem value="blueberry">Monthly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={"px-3 flex flex-col gap-4"}>
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
