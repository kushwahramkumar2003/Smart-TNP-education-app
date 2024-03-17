import { Button } from "../../components/ui/button.tsx";

const Dashboard = () => {
  return (
    <div className=" flex flex-col p-4">
      <div className="flex flex-row justify-between">
        <p className={"text-2xl font-semibold"}>My Courses</p>
        <Button>+ Create New</Button>
      </div>
      <div className="max-h-screen overflow-y-auto mt-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

const CourseCard = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-row justify-between items-center">
        <div className={"flex flex-row gap-6"}>
          <div className={"w-28 rounded-lg object-cover overflow-hidden"}>
            <img
              className={" rounded-lg"}
              src="https://www.hubspot.com/hubfs/free-online-courses_8.webp"
              alt="course1"
            />
          </div>
          <div
            className={"flex flex-col  items-start text-center justify-evenly"}
          >
            <p className={"text-xl font-semibold"}>
              Cooking class for your summer holiday
            </p>
            <div className={"flex flex-row gap-3  "}>
              <div
                className={
                  "p-1 bg-blue-300 justify-center items-center text-center h-fit rounded-lg"
                }
              >
                <p className={"text-blue-600 text-sm"}>Personal</p>
              </div>

              <p>1143 Students</p>
              <p>$24</p>
            </div>
          </div>
        </div>
        <Button>Edit Course</Button>
      </div>
    </div>
  );
};

export default Dashboard;
