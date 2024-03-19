import { IGoals } from "../../../pages/Goals/Goals";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { TableCell, TableRow } from "../../ui/table";
import { PiDotsThreeOutlineBold } from "react-icons/pi";

const goalTypeHashMap = new Map();
goalTypeHashMap.set("Personal", 0);
goalTypeHashMap.set("Financial", 1);
goalTypeHashMap.set("Profesional", 2);
goalTypeHashMap.set("Live Event", 3);

const goalStatusHashMap = new Map();
goalStatusHashMap.set("On-Going", 0);
goalStatusHashMap.set("Complete", 1);
goalStatusHashMap.set("In Progress", 2);
goalStatusHashMap.set("Pending", 3);

const goalTypeStyle = [
  "bg-blue-200 text-blue-600",
  "bg-orange-300 text-orange-600",
  "bg-sky-400 text-sky-800",
  "bg-pink-300 text-pink-700",
];

const goalStatusStyle = [
  "bg-orange-300 text-orange-600",
  "bg-green-300 text-green-600",
  "bg-blue-200 text-blue-600",
  "bg-orange-300 text-orange-700",
];

function GoalDataTable({ goal }: { goal: IGoals }) {
  return (
    <TableRow className="">
      <TableCell className="font-medium ">{goal.name}</TableCell>
      <TableCell>
        <span
          className={`${goalTypeStyle[goalTypeHashMap.get(goal.type)]} opacity-50 py-1 rounded-xl px-2`}
        >
          {goal.type}
        </span>
      </TableCell>
      <TableCell>{goal.start.toLocaleDateString()}</TableCell>
      <TableCell className="">{goal.deadline.toLocaleDateString()}</TableCell>
      <TableCell className="">
        <span
          className={`${goalStatusStyle[goalStatusHashMap.get(goal.status)]} opacity-50 py-1 rounded-xl px-2`}
        >
          {goal.status}
        </span>
      </TableCell>
      <TableCell className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <PiDotsThreeOutlineBold size={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export default GoalDataTable;
