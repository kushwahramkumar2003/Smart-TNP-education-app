import React from 'react';
import { TfiMenuAlt } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import Class from '../../ui/Class'
import CalendarChec from '../Calender';
 function DashboardLayout() {
  return (
    <>
    <div>
            <div className="flex justify-between">
            <div className=' flex row-auto gap-2'>
                <p className='hover:bg-sky-200 rounded-xl text-center px-3 py-2 hover:text-blue-500 mx-0 cursor-pointer'>Live Event</p>
                <p className='hover:bg-sky-200 rounded-xl text-center px-3 py-2 hover:text-blue-500 cursor-pointer'>Class</p>
            </div>
                <div className="bg-white rounded-xl flex flex-row gap-2 items-center px-2 py-2">
                    <div className='rounded-xl px-3  py-1  hover:bg-blue-300 cursor-pointer'>
                    <TfiMenuAlt className='' size={27} />
                    </div>
                    <div className='rounded-xl px-3  py-1  hover:bg-blue-300 cursor-pointer'>
                    <RxDashboard className='cursor-pointer' size={27} />
                    </div>
                   
                </div>
            </div>
            <div className='flex flex-row gap-2 justify-between p-4'>
          <Class></Class>
          <CalendarChec ></CalendarChec>
          </div>
    </div>
         </>

  );
}
export default DashboardLayout
