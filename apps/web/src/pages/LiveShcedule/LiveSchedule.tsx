import Calendar from '@/components/CalenderComponents/Calender';
import React from 'react';

export default function LiveSchedule() {
  return (
    <div>
      <div className='py-12'>
        <h1 className='py-3  font-semibold text-2xl'>Live Event Schedule</h1>
        <div className='flex flex-row justify-between'>
        <div>
        <div className='max-h-fit'>
        <Calendar></Calendar>
        </div>
        <div className='w-1/2 bg-white'>Upcoming</div>
        <div>

        </div>
        </div>
        <div className='w-1/2 bg-white'>Today</div>
        <div>
          
        </div>
        </div>
        </div>
    </div>
  );
}
