import { useState } from "react";
import { Button } from "../../ui/button";
import About from "./About";
import Review from "./Review";

const buttons = [
  {
    title: "About",
  },
  {
    title: "Schedule",
  },
  {
    title: "Reviews",
  },
];

const ProfileDescription = () => {
  const [activeButton, setActiveButton] = useState("About");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        {buttons.map((buttonItem, index) => {
          return (
            <Button
              key={index}
              className={`text-lg text-slate-400 ${activeButton === buttonItem.title ? "text-blue-700 bg-blue-900 bg-opacity-20 hover:bg-blue-900 hover:text-blue-700 hover:bg-opacity-20" : "bg-blue-400 bg-opacity-20 text-blue-500 hover:bg-blue-900 hover:text-blue-700 hover:bg-opacity-20"} `}
              onClick={() => setActiveButton(buttonItem.title)}
            >
              {buttonItem.title}
            </Button>
          );
        })}
      </div>
      {activeButton === "About" && <About />}
      {activeButton === "Reviews" && <Review />}
    </div>
  );
};

export default ProfileDescription;
