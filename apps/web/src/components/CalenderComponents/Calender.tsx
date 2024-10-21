// import { Menu, Transition } from '@headlessui/react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'

// import {useState } from 'react'
import { useState } from 'react'
import {Schedules} from "../data/classScheduleData"

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }


  return (
    <div className="w-full h-full bg-white mx-4 rounded-lg">
      <div className="p-4">
        <div className="">
          <div className="">
            <div className="flex center flex-row justify-evenly">
           
              <button
                type="button"
                onClick={previousMonth}
                className=" flex flex-none items-center justify-center  text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-8 h-8" aria-hidden="true" />
              </button>
              <h2 className="font-semibold text-gray-900 px-4">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                onClick={nextMonth}
                type="button"
               className="items-center justify-center text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-8 h-8" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-12 w-14 items-center justify-center rounded-3xl'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {Schedules.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
        </div>
      </div>
    </div>
  )
}

// interface MeetingType {
//   id: number
//   name: string
//   imageUrl: string
//   startDatetime: string
//   endDatetime: string
// }
// function Meeting({ meeting }: { meeting: MeetingType }) {
//   let startDateTime = parseISO(meeting.startDatetime)
//   let endDateTime = parseISO(meeting.endDatetime)

//   return (
//     <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
//       <img
//         src={meeting.imageUrl}
//         alt=""
//         className="flex-none w-10 h-10 rounded-full"
//       />
//       <div className="flex-auto">
//         <p className="text-gray-900">{meeting.name}</p>
//         <p className="mt-0.5">
//           <time dateTime={meeting.startDatetime}>
//             {format(startDateTime, 'h:mm a')}
//           </time>{' '}
//           -{' '}
//           <time dateTime={meeting.endDatetime}>
//             {format(endDateTime, 'h:mm a')}
//           </time>
//         </p>
//       </div>
//       <Menu
//         as="div"
//         className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
//       >
//         <div>
//           <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
//             <span className="sr-only">Open options</span>
//             <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
//           </Menu.Button>
//         </div>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm'
//                     )}
//                   >
//                     Edit
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm'
//                     )}
//                   >
//                     Cancel
//                   </a>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </li>
//   )
// }

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
