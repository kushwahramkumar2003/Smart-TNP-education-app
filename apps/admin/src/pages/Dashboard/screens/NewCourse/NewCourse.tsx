import Lessons from "../../../../components/core/Dashboard/Lessons";
import Overview from "../../../../components/core/Dashboard/Overview";
import { Button } from "../../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { cn } from "../../../../lib/utils";

const NewCourse = () => {
  return (
    <div>
      <div>
        <h1>My Courses</h1>
        <div>
          <Tabs defaultValue="overview">
            <TabsList
              className={
                (cn("bg-transparent bg-white"),
                "flex flex-row justify-between items-center px-4")
              }
            >
              <div>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
              </div>

              <div>
                <Button>Publish Course</Button>
              </div>
            </TabsList>
            <TabsContent
              value="overview"
              className="flex flex-col justify-center items-center w-full"
            >
              <Overview />
            </TabsContent>
            <TabsContent
              value="lessons"
              className="flex flex-col justify-center items-center w-full"
            >
              <Lessons />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
