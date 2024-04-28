import { UserProfile } from "../../../types/user.ts";
import EventCard from "./EventCard.tsx";

const eventCardData: EventCardDataSchema[] = [
  {
    img: "https://mll5eakftz0f.i.optimole.com/cb:UOMG.1a47c/w:auto/h:auto/q:mauto/f:best/https://redskydigital.com/wp-content/uploads/2022/05/learn_software.jpg",
    user: {
      avatar:
        "https://static.wikia.nocookie.net/playstationallstarsbattleroyale/images/1/18/SOULCALIBUR_%E2%85%A4_31.png/revision/latest/thumbnail/width/360/height/450?cb=20120817224023",
      comeToMeFor: [],
      needHelpFor: [],
      status: "Active",
    },
    title: "Crash course of Python",
    date: new Date(),
    duration: 90000,
  },
  {
    img: "https://mll5eakftz0f.i.optimole.com/cb:UOMG.1a47c/w:auto/h:auto/q:mauto/f:best/https://redskydigital.com/wp-content/uploads/2022/05/learn_software.jpg",
    user: {
      avatar:
        "https://static.wikia.nocookie.net/playstationallstarsbattleroyale/images/1/18/SOULCALIBUR_%E2%85%A4_31.png/revision/latest/thumbnail/width/360/height/450?cb=20120817224023",
      comeToMeFor: [],
      needHelpFor: [],
      status: "Active",
    },
    title: "Crash course of Python",
    date: new Date(),
    duration: 90000,
  },
];
const LiveEvent = () => {
  return (
    <div className={"bg-white rounded-xl p-4"}>
      <div className={"flex flex-row justify-between"}>
        <p className={"text-lg text-gray-700 font-semibold"}>Live Event</p>
        <p className={"text-md text-blue-700 font-semibold"}>See All</p>
      </div>
      <div className={"flex flex-col gap-2"}>
        {eventCardData.map((event) => {
          return <EventCard data={event} key={event.title} />;
        })}
      </div>
    </div>
  );
};

export interface EventCardDataSchema {
  img: string;
  user: UserProfile;
  title: string;
  date: Date;
  duration: number;
}

export default LiveEvent;
