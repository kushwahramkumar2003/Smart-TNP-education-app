import { useState } from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";

type DataButton = "All" | "Personal" | "Finance" | "Profesional" | "Live Event";
type DurationButton = "1 Month" | "3 Month" | "6 Month" | "1 Year";

export const useFilterGoalsData = () => {
  const [selectedData, setSelectedData] = useState<DataButton>("All");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationButton>("1 Month");

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

const GoalCategories: React.FC = () => {
  const {
    selectedData,
    selectedDuration,
    handleDataSelection,
    handleDurationSelection,
  } = useFilterGoalsData();

  const dataButtons: DataButton[] = ["Personal", "Finance", "Profesional"];
  const durationButtons: DurationButton[] = [
    "1 Month",
    "3 Month",
    "6 Month",
    "1 Year",
  ];

  return (
    <div className="grid  items-center gap-4 justify-between max-md:flex-col max-md:gap-4">
      <div className="flex flex-col gap-3 dark:text-white overflow-x-auto">
        <Label className="text-sm text-gray-600">Type of Goal</Label>
        <div className="flex flex-row gap-3">
          {dataButtons.map((data) => (
            <Button
              key={data}
              onClick={() => handleDataSelection(data)}
              className={`${selectedData === data ? "bg-blue-900 bg-opacity-20 hover:bg-opacity-20  text-blue-900 hover:bg-blue-900" : " text-gray-600 bg-transparent hover:bg-opacity-20 hover:bg-blue-900 hover:text-blue-900 "} rounded-lg font-semibold dark:text-white border border-blue-900 border-opacity-20`}
            >
              {data}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 dark:text-white">
        <Label className="text-sm text-gray-600">Timing</Label>
        <div className="flex flex-row gap-3">
          {durationButtons.map((duration) => (
            <Button
              key={duration}
              onClick={() => handleDurationSelection(duration)}
              className={`${selectedDuration === duration ? "bg-blue-900 bg-opacity-20 hover:bg-opacity-20  text-blue-900 hover:bg-blue-900" : " text-gray-600 bg-transparent hover:bg-opacity-20 hover:bg-blue-900 hover:text-blue-900 "} rounded-lg font-semibold dark:text-white border border-blue-900 border-opacity-20`}
            >
              {duration}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalCategories;
