import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button.tsx";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col p-4 max-md:flex-col">
      <div className="flex flex-row justify-between">
        <p className={"text-2xl font-semibold"}>My Courses</p>
        <Button onClick={() => navigate("/mycourses/new")}>+ Create New</Button>
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
    <div className="p-1">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-row justify-between items-center max-md:flex-col max-md:gap-3 dark:bg-slate-800">
        <div className={"flex flex-row gap-6 max-md:flex-col"}>
          <div
            className={
              "w-28 rounded-lg object-cover overflow-hidden max-md:w-auto max-md:h-auto"
            }
          >
            <img
              className={" rounded-lg"}
              src="https://www.hubspot.com/hubfs/free-online-courses_8.webp"
              alt="course1"
            />
          </div>
          <div
            className={"flex flex-col  items-start text-center justify-evenly"}
          >
            <p className={"text-xl font-semibold"}>Java Coding class</p>
            <div
              className={
                "flex flex-row gap-3 max-md:justify-center max-md:items-center"
              }
            >
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
        <div className="flex max-md:w-full justify-center items-center">
          <Button className="w-full">Edit Course</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
