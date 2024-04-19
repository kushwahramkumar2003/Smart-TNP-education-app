import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const Lessons = () => {
  return (
    <div>
      <div>
        <Select defaultValue="light">
          <SelectTrigger className="">
            <SelectValue placeholder="Select Lesson" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Lesson 1</SelectItem>
            <SelectItem value="dark">Lesson 2</SelectItem>
            <SelectItem value="system">Lesson 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div></div>
    </div>
  );
};

export default Lessons;
