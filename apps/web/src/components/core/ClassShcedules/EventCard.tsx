import { EventCardDataSchema } from "./Events";
import { SlCalender } from "react-icons/sl";
import { MdAccessAlarm } from "react-icons/md";

const options: Intl.DateTimeFormatOptions = {
  day: "numeric", // Numeric day (e.g., 6)
  month: "short", // Short month name (e.g., Jan)
  hour: "numeric", // Numeric hour (e.g., 10)
  minute: "2-digit", // Two-digit minutes (e.g., 00)
  hour12: true, // Use 12-hour clock (e.g., AM/PM)
};

const EventCard = ({ data }: { data: EventCardDataSchema }) => {
  return (
    <div className={"flex flex-row gap-3 items-center"}>
      <div className={"flex rounded-lg w-28 overflow-hidden h-auto"}>
        <img className={"h-fit w-fit"} src={data.img} alt="img" />
      </div>

      <div className={"flex flex-col gap-1"}>
        <div className={"flex flex-row gap-4 items-center"}>
         <p className="bg-blue-300 rounded-lg px-3">{data.category}</p>
          <p className={"text-gray-700"}>{data.user.id}</p>
        </div>
        <p className={"text-xl text-gray-900 font-semibold"}>{data.title}</p>
        <div className={"flex flex-row justify-between text-gray-600"}>
          <div className={"flex flex-row gap-2 items-center"}>
            <SlCalender />
            <p>{data.date.toLocaleString("en-IN", options)}</p>
          </div>
          <div className={"flex flex-row gap-2 items-center"}>
            <MdAccessAlarm />
            <p>{data.duration / 60000} min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
