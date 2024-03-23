import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import GoalCategories from "./GoalCategories";

const CreateNewGoal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDialog = () => setIsOpen(false);
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger>
        <Button onClick={() => setIsOpen(true)}>+ Create New Goals</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Goal</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label className="text-sm text-gray-600">Goal Title</Label>
            <Input type="text" placeholder="Enter goal title..." />
          </div>
          <GoalCategories />
        </div>
        <DialogFooter>
          <div className="flex justify-between w-full flex-row ">
            <Button
              className="bg-transparent text-primary  bg-opacity-20 hover:bg-red-100"
              onClick={handleOpenDialog}
            >
              Close
            </Button>
            <Button>Create Goal</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewGoal;
