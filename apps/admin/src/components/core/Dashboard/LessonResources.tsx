import { Resource } from "./Lessons.tsx";
import { AiTwotoneDelete } from "react-icons/ai";
import { Button } from "../../ui/button.tsx";

import { FaPlay } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";

export const LessonResources = ({ resource }: { resource: Resource }) => {
  return (
    <div className={"flex flex-row justify-between"}>
      <div className={"flex flex-row items-center"}>
        <div className={"px-7 text-orange-600"}>
          {resource.type === "MP4" ? (
            <FaPlay size={24} />
          ) : (
            <TbNotes size={25} />
          )}
        </div>
        <div className={"flex flex-col gap-2"}>
          <p className={"text-xl text-gray-700 font-bold"}>{resource.title}</p>
          <div
            className={"flex flex-row text-gray-600 gap-2 items-center text-lg"}
          >
            <p>{resource.type}</p>
            <span className={"w-[8px] h-[8px] rounded-full bg-gray-400"}></span>
            <p>{resource.length}</p>
            <span className={"w-[8px] h-[8px] rounded-full bg-gray-400"}></span>
            <p>{resource.size}</p>
          </div>
        </div>
      </div>
      <div>
        <Button
          className={
            "flex flex-row items-center gap-2 text-primary hover:text-primary"
          }
          variant={"ghost"}
        >
          <AiTwotoneDelete size={18} /> Delete
        </Button>
      </div>
    </div>
  );
};
