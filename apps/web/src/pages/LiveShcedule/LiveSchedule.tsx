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

const LiveSchedule = () => {
  return (
    <div className="mt-3 flex flex-col">
      <h1 className="text-2xl font-semibold px-3 ">Live Event Schedule</h1>

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

export default LiveSchedule;
