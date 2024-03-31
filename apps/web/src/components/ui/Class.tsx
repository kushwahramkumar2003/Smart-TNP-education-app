// import React from 'react';
// import { ClassData } from '../data/ClassData';

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

// import React from 'react';
import { ClassData } from '../data/ClassData';

function LiveClasses() {
  return (
    // <div className="w-1/2 bg-white">
    <div className="w-1/2 bg-white rounded-lg flex flex-col">
      <p className='text-xl font-bold px-3 py-1'>Live Event</p>
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
              <p className="mt-0 text-gray-700">{classItem.duration}</p>
              <p className="mt-0 text-gray-700">{classItem.time}</p>
              </div>
            </a>
          </div>
        </div>
      ))}
      
    </div>
  //  {/* </div> */}
  );
}

export default LiveClasses;
