import { useState } from "react";
import { Button } from "../components/ui/button";

type DataButton = "All" | "Personal" | "Finance" | "Profesional" | "Live Event";
type DurationButton = "1W" | "1M" | "1Y";

export const useFilterGoalsData = () => {
  const [selectedData, setSelectedData] = useState<DataButton>("All");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationButton>("1M");

  const handleDataSelection = (data: DataButton) => {
    console.log("data", data);
    setSelectedData(data);
  };

  const handleDurationSelection = (duration: DurationButton) => {
    console.log("duration", duration);
    setSelectedDuration(duration);
  };

  return {
    selectedData,
    selectedDuration,
    handleDataSelection,
    handleDurationSelection,
  };
};

const FilterButtons: React.FC = () => {
  const {
    selectedData,
    selectedDuration,
    handleDataSelection,
    handleDurationSelection,
  } = useFilterGoalsData();

  const dataButtons: DataButton[] = [
    "All",
    "Personal",
    "Finance",
    "Profesional",
    "Live Event",
  ];
  const durationButtons: DurationButton[] = ["1W", "1M", "1Y"];

  return (
    <div className="flex flex-row justify-between max-md:flex-col max-md:gap-4">
      <div className="flex flex-row gap-3 dark:text-white overflow-x-auto">
        {dataButtons.map((data) => (
          <Button
            key={data}
            onClick={() => handleDataSelection(data)}
            className={`${selectedData === data ? "bg-blue-300  text-white hover:bg-blue-700" : "bg-transparent text-black focus:bg-blue-200 hover:bg-blue-200 dark:text-white"} rounded-xl font-semibold dark:text-white`}
          >
            {data}
          </Button>
        ))}
      </div>
      <div className="flex flex-row gap-2 dark:text-white">
        {durationButtons.map((duration) => (
          <Button
            key={duration}
            onClick={() => handleDurationSelection(duration)}
            className={`${selectedDuration === duration ? "bg-blue-700 text-white hover:bg-blue-700" : "bg-transparent focus:bg-blue-200 hover:bg-blue-200 text-black"}  rounded-xl font-semibold dark:text-white`}
          >
            {duration}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
