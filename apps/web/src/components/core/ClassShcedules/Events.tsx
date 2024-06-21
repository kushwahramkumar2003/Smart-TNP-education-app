import { UserProfile } from "../../../../../admin/src/types/user.ts";
import EventCard from "./EventCard.tsx";

const eventCardData: EventCardDataSchema[] = [
  {
    img: "https://mll5eakftz0f.i.optimole.com/cb:UOMG.1a47c/w:auto/h:auto/q:mauto/f:best/https://redskydigital.com/wp-content/uploads/2022/05/learn_software.jpg",
    category : "Finance",
    user: {
    
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
    category : "Finance",
    user: {
    
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
    category : "Finance",
    user: {
    
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
    category : "Finance",
    user: {
    
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
    category : "Finance",
    user: {
    
      comeToMeFor: [],
      needHelpFor: [],
      status: "Active",
    },
    title: "Crash course of Python",
    date: new Date(),
    duration: 90000,
  },
 
];
const Events = () => {
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
  category : string;
}

export default Events;
