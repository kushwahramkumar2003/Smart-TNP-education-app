import { BsPerson } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import FilterButtons, {
  useFilterGoalsData,
} from "../../hooks/useFilterGoalsData";
import { useEffect } from "react";
import GoalDataTable from "../../components/core/Goals/GoalDataTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { cn } from "../../lib/utils";
import CreateNewGoal from "../../components/core/Goals/CreateNewGoal";
const goalsStatusAndTypes = [
  {
    icon: (
      <div className="rounded-full bg-sky-400 p-1 text-white flex ">
        <span className="rounded-full bg-sky-700 p-1 flex">
          <BsPerson size={20} />
        </span>
      </div>
    ),
    type: "Personal",
    number: "8",
  },
  {
    icon: (
      <div className="rounded-full bg-orange-400 p-1 text-white flex">
        <span className="rounded-full bg-orange-700 p-1 flex">
          <HiOutlineChartPie size={20} />
        </span>
      </div>
    ),
    type: "Financial",
    number: "14",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-600 p-1 text-white flex">
        <span className="rounded-full bg-blue-900 p-1 flex">
          <HiOutlineShoppingBag size={20} />
        </span>
      </div>
    ),
    type: "Profesional",
    number: "9",
  },
  {
    icon: (
      <div className="rounded-full bg-yellow-300 p-1 text-white flex">
        <span className="rounded-full bg-yellow-600 p-1 flex">
          <IoMdTime size={20} />
        </span>
      </div>
    ),
    type: "On-Going",
    number: "4",
  },
  {
    icon: (
      <div className="rounded-full bg-teal-300 p-1 text-white flex">
        <span className="rounded-full bg-teal-600 p-1 flex">
          <MdOutlineTaskAlt size={20} />
        </span>
      </div>
    ),
    type: "Complete",
    number: "23",
  },
];

type GoalTypes = "Personal" | "Financial" | "Profesional" | "Live Event";
type GoalStatus = "On-Going" | "Complete" | "In Progress" | "Pending";
export interface IGoals {
  name: string;
  type: GoalTypes;
  start: Date;
  deadline: Date;
  status: GoalStatus;
}

const goalsData: IGoals[] = [
  {
    name: "Cooking class",
    type: "Personal",
    start: new Date(),
    deadline: new Date(),
    status: "On-Going",
  },
  {
    name: "Cooking class",
    type: "Profesional",
    start: new Date(),
    deadline: new Date(),
    status: "Complete",
  },
  {
    name: "Cooking class",
    type: "Financial",
    start: new Date(),
    deadline: new Date(),
    status: "In Progress",
  },
  {
    name: "Cooking class",
    type: "Live Event",
    start: new Date(),
    deadline: new Date(),
    status: "On-Going",
  },
  {
    name: "Cooking class",
    type: "Profesional",
    start: new Date(),
    deadline: new Date(),
    status: "Complete",
  },
  {
    name: "Cooking class",
    type: "Live Event",
    start: new Date(),
    deadline: new Date(),
    status: "Pending",
  },
  {
    name: "Cooking class",
    type: "Personal",
    start: new Date(),
    deadline: new Date(),
    status: "Pending",
  },
];

const Goals = () => {
  const { selectedData, selectedDuration } = useFilterGoalsData();
  useEffect(() => {
    console.log("selectedData", selectedData);
    console.log("selectedDuration", selectedDuration);
  }, [selectedData, selectedDuration]);

  return (
    <div className="flex flex-col gap-6  max-h-screen max-md:mb-8 max-sm:mb-6 pb-8">
      <div className="flex gap-2 flex-col mt-4">
        <div className="flex flex-row justify-between">
          <p className="text-2xl font-semibold">Goals</p>

          <CreateNewGoal />
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-3">
          {goalsStatusAndTypes.map((goal) => (
            <div
              className="flex flex-row justify-center items-center gap-3 max-sm:flex-col"
              key={goal.type}
            >
              {goal.icon}
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg opacity-35">{goal.type}</p>
                <p className="text-3xl font-semibold">{goal.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:px-8 md:px-6 sm:px-2 overflow-y-scroll">
        <FilterButtons />
        <div className="flex flex-col px-1 gap-1 ">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Start</TableHead>
                <TableHead className="">Deadline</TableHead>
                <TableHead className="">Status</TableHead>
                <TableHead className="">Action</TableHead>
              </TableRow>
              {/* <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          View All
        </button>
      </div> */}
            </TableHeader>
            <TableBody className={cn(null, "max-h-screen overflow-y-auto")}>
              {goalsData.map((goal) => (
                <GoalDataTable goal={goal} key={goal.name} />
              ))}
            </TableBody>
            <TableFooter className="flex flex-row justify-center items-center w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Goals;

// import React from 'react';
// import { useTable } from 'react-table';
// import 'tailwindcss/tailwind.css';

// const Table = ({ data }) => {
//   const columns = [
//     {
//       Header: 'Type',
//       accessor: 'type',
//     },
//     {
//       Header: 'Name',
//       accessor: 'name',
//     },
//     {
//       Header: 'Start',
//       accessor: 'start',
//     },
//     {
//       Header: 'Deadline',
//       accessor: 'deadline',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//     },
//     {
//       Header: 'Action',
//       accessor: 'action',
//     },
//   ];

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data });

//   return (
//     <div>
//       <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-800">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-4 py-2 text-left text-sm font-semibold text-white"
//                 >
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className={`px-4 py-2 ${
//                       cell.column.id === 'status'
//                         ? cell.value === 'Complete'
//                           ? 'bg-green-500'
//                           : 'bg-blue-500'
//                         : ''
//                     }`}
//                   >
//                     {cell.render('Cell')}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4">
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// const Page = () => {
//   const data = [
//     {
//       type: 'Personal',
//       name: 'Cooking Class Mediterania',
//       start: '21 Dec, 2020',
//       deadline: '21 Jan, 2021',
//       status: 'On Going',
//       action: '-',
//     },
//     {
//       type: 'Profesional',
//       name: 'Final Exam Thesis',
//       start: '21 Dec, 2020',
//       deadline: '21 Jan, 2021',
//       status: 'Complete',
//       action: 'View',
//     },
//     {
//       type: 'Live Event',
//       name: 'Major Lazer Concert Live',
//       start: '21 Dec, 2020',
//       deadline: '21 Jan, 2021',
//       status: 'Complete',
//       action: 'View',
//     },
//     {
//       type: 'Finance',
//       name: 'Buy Air Jordan 1',
//       start: '21 Dec, 2020',
//       deadline: '21 Jan, 2021',
//       status: 'In Progress',
//       action: 'Buy',
//     },
//   ];

//   return (
//     <div className="p-4">
//       <Table data={data} />
//     </div>
//   );
// };

// export default Page;
