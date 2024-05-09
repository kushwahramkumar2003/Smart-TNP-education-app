// import React from 'react';
// import { ClassData } from '../data/ClassData';
{/* <section className="mt-12 md:mt-0 md:pl-14">
<h2 className="font-semibold text-gray-900">
  Schedule for{' '}
  <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
    {format(selectedDay, 'MMM dd, yyy')}
  </time>
</h2>
<ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
  {selectedDaySchedules.length > 0 ? (
    selectedDaySchedules.map((meeting) => (
      <Meeting meeting={meeting} key={meeting.id} />
    ))
  ) : (
    <p>No Schedules for today.</p>
  )}
</ol>
</section> */}
// function LiveClasses() {
//   return (
//     <>
//     <div className='bg-white m-2 rounded-xl p-3 flex flex-row'>
//       {ClassData.map((classItem) => (
//         <div key={classItem.id}>
//           <div className="user-info">
//             <img src={classItem.userPhoto} alt={classItem.userName} className="user-photo" />
//             <span className="user-name">{classItem.userName}</span>
//           </div>
//           <div className="classes-info">
//             <a href={classItem.url}>
//               <img src={classItem.imageUrl} alt={classItem.title} />
//               <h3>{classItem.title}</h3>
//               <p>{classItem.duration}</p>
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </>
//   );
// }

// export default LiveClasses;


import { format } from 'date-fns';
import { ClassData } from '../data/ClassData';
import React, { useState } from 'react';

// define a interface for type Props
interface Props {
  selectedDay: Date;
  selectedDaySchedules: any[];
}

// function LiveClasses () {
  const LiveClasses = ({selectedDay} :Props) => {
    // let today = new Date(); // Declare and assign a value to the 'today' variable
    // let [selectedDay, setSelectedDay] = useState(today);
  return (
    <div className="8/12 bg-white">
    <div className=" bg-white rounded-lg flex flex-col">
      <p className='text-xl font-bold px-4 py-4'>Live Event</p>
      {ClassData.map((classItem) => (
        <div key={classItem.id} className="overflow-hidden shadow-sm px-3 py-2 flex">
          <img  src={classItem.imageUrl} alt={classItem.title} className="w-24 h-24 rounded-lg " />
          <div className="px-8">
            <div className="user-info flex items-center">
              <img src={classItem.userPhoto} alt={classItem.userName} className="w-6 h-6 rounded-full mr-2" />
              <span className="text-gray-800 font-semibold">{classItem.userName}</span>
            </div>
            <a href={classItem.url} className="block mt-0">
              {/* <img  src={classItem.imageUrl} alt={classItem.title} className="w-32 rounded-lg shadow-md" /> */}
              <h3 className="mt-0 text-xl font-semibold text-gray-900">{classItem.title}</h3>
              <div className='flex flex-row gap-4'>
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
              <p className="mt-0 text-gray-700">{classItem.time}</p>
            
              <p className="mt-0 text-gray-700">{classItem.duration}</p>
              </div>
            </a>
          </div>
        </div>
      ))}
        </div> 
       
    </div>
   
  );
}

export default LiveClasses;


// import React, { useState } from 'react';
// import { isSameDay, parseISO } from 'date-fns'; // Import necessary functions from date-fns
// import { ClassData } from '../data/ClassData';
// import ScheduleSection from '../CalenderComponents/ScheduleSection'; // Import the ScheduleSection component

// function LiveClasses() {
//   let today = useState(new Date())[0];
//   let [selectedDay, setSelectedDay] = useState(today);

//   // Filter class data for the selected day
//   let selectedDaySchedules = ClassData.filter((classItem) =>
//     isSameDay(parseISO(classItem.time), selectedDay)
//   );

//   return (
//     <div className="flex gap-4">
//       {/* Render the Live Classes */}
//       <div className="w-1/2 bg-white rounded-lg flex flex-col">
//         <p className='text-xl font-bold px-3 py-1'>Live Event</p>
//         {ClassData.map((classItem) => (
//           <div key={classItem.id} className="overflow-hidden shadow-sm px-3 py-2 flex">
//             <img  src={classItem.imageUrl} alt={classItem.title} className="w-24 h-24 rounded-lg " />
//             <div className="px-8">
//               <div className="user-info flex items-center">
//                 <img src={classItem.userPhoto} alt={classItem.userName} className="w-6 h-6 rounded-full mr-2" />
//                 <span className="text-gray-800 font-semibold">{classItem.userName}</span>
//               </div>
//               <a href={classItem.url} className="block mt-0">
//                 {/* <img  src={classItem.imageUrl} alt={classItem.title} className="w-32 rounded-lg shadow-md" /> */}
//                 <h3 className="mt-0 text-xl font-semibold text-gray-900">{classItem.title}</h3>
//                 <div className='flex flex-row gap-4'>
//                   <p className="mt-0 text-gray-700">{classItem.duration}</p>
//                   <p className="mt-0 text-gray-700">{classItem.time}</p>
//                 </div>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Render the Schedule Section */}
//       <ScheduleSection selectedDay={selectedDay} selectedDaySchedules={[]} />
//     </div>
//   );
// }


