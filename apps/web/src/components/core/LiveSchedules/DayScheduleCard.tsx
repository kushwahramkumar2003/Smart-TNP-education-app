import { ScheduleSchema } from "./DayWiseSchedule.tsx";
import { IoMdAlarm } from "react-icons/io";

function formatTime(date: Date): string {
  let hours: number | string = date.getHours();

  let minutes: number | string = date.getMinutes();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;

  return hours + ":" + minutes;
}

const DayScheduleCard = ({ data }: { data: ScheduleSchema }) => {
  if (!data.scheduled) {
    return (
      <div
      className={"flex flex-row gap-5 text-gray-700 text-xl items-center"}
      >
        <div
          className={
            "flex items-center text-xl w-16 h-16 rounded-xl " +
            " justify-center"
          }
        >
          <p>{formatTime(data.time)}</p>
        </div>
        <h2>No Schedule</h2>
        
      </div>
    );
  }
  if (data.duration)
    return (
  <div className={"flex flex-row gap-3 items-center"}>
        <div
          className={
            "flex items-center text-lg w-16 h-16 rounded-xl bg-green-100 text-green-500 justify-center"
          }
        >
          <p >{formatTime(data.time)}</p>
        </div>
        <div className={"flex flex-col mx-3"}>
          <p className={"text-xl text-gray-700 font-semibold"}>{data.title}</p>
          <div
            className={
              "flex flex-row gap-2 text-md text-gray-500 items-center"
            }
          >
            
            <span className={"w-2 h-2 rounded-full bg-gray-400"} />
            <p>{data.type}</p>
            <span className={"w-2 h-2 rounded-full bg-gray-400"} />
            <div className={"flex flex-row items-center gap-1"}>
              <IoMdAlarm />
              <p>{data.duration / 600000}min</p>
            </div>
            <span className={"w-2 h-2 rounded-full bg-gray-400"} />
            <p>On Going</p>
          </div>
        </div>
      </div>
    );
};

export default DayScheduleCard;
