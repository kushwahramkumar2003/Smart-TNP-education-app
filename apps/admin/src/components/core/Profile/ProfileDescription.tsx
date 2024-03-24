import { useState } from "react";
import { Button } from "../../ui/button";

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
    <div>
      {buttons.map((buttonItem, index) => {
        return (
          <Button
            key={index}
            className={`text-lg text-slate-400 ${activeButton === buttonItem.title ? "text-slate-600" : ""}`}
            onClick={() => setActiveButton(buttonItem.title)}
          >
            {buttonItem.title}
          </Button>
        );
      })}
    </div>
  );
};

export default ProfileDescription;
