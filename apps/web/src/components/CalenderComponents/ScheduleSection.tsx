// import React from 'react';
// import { format } from 'date-fns';
// import Meeting from './Calender'; // Assuming Meeting component is also exported from its file

// interface MeetingType {
//   id: number;
//   name: string;
//   imageUrl: string;
// //   startDatetime: string
//   endDatetime: string;
// }

// interface Props {
//   selectedDay: Date;
//   selectedDaySchedules: MeetingType[];
// }

// const ScheduleSection: React.FC<Props> = ({ selectedDay, selectedDaySchedules }) => {
//   return (
//     <section className="mt-12 md:mt-0 md:pl-14">
//       <h2 className="font-semibold text-gray-900">
//         Schedule for{' '}
//         <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
//           {format(selectedDay, 'MMM dd, yyy')}
//         </time>
//       </h2>
//       <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
//         {selectedDaySchedules.length > 0 ? (
//           selectedDaySchedules.map((meeting) => (
//             <Meeting meeting={meeting} key={meeting.id} />
//           ))
//         ) : (
//           <p>No Schedules for today.</p>
//         )}
//       </ol>
//     </section>
//   );
// };

// export default ScheduleSection;
