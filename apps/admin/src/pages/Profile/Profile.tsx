import { Button } from "../../components/ui/button";
import ProfileDescription from "../../components/core/Profile/ProfileDescription";
import EditProfile from "../../components/core/Profile/EditProfile";
import { getUserSelector } from "../../store/slices/userReducers";
import { useSelector } from "react-redux";
import { RootState, UserState } from "../../types/user";

const intrest = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Science",
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "Python",
  "Django",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Science",
  "UI/UX Design",
];

const Profile = () => {
  const user = useSelector(
    (state: RootState): UserState => getUserSelector(state)
  );
  return (
    <div className="w-full flex flex-row bg-gray-100 p-4 gap-4">
      <div className="flex flex-col gap-4">
        <div className=" bg-gray-200 dark:bg-gray-800 flex flex-wrap rounded-lg overflow-hidden">
          <div className="container    bg-white     transform   duration-200 easy-in-out p-0">
            <div className=" h-32 overflow-hidden">
              <img
                className="w-full"
                src="https://t3.ftcdn.net/jpg/06/71/07/40/240_F_671074077_KpgkMGWOEFOVs5yo3ZMGMA3J88288A4N.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center px-5  -mt-12 flex-col items-center">
              <img
                className="h-32 w-32 bg-white p-2 rounded-full   "
                src={user && user.avatar}
                alt=""
              />
              <EditProfile />
            </div>
            <div className=" ">
              <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">Ramkumar</h2>
              </div>
              <div className="text-center px-14">
                <p className="text-gray-500 text-sm">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProfileDescription />
      </div>
      <div className="flex flex-col gap-3  max-w-[30rem]">
        <div className="bg-white rounded-lg p-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">About me</h2>
            <p className="text-gray-600">
              Hello! I'm designer with vision to deliver signature expericence
              design and user centric concern. I provide best design for you
              needs based on experience and skills as professional designer.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Interest</h3>
            <div className="flex flex-row gap-2 flex-wrap">
              {intrest.map((item) => {
                return (
                  <span
                    key={item}
                    className="justify-center items-center flex bg-blue-300 text-blue-900 rounded-lg px-2 py-1 "
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600">Ashoknagar, (M.P.)</p>
          </div>

          <Button className="w-full ">Email</Button>
        </div>
        <div className=" flex flex-col gap-2  overflow-x-auto overflow-y-auto bg-white rounded-lg p-3">
          <h2>My Skill</h2>
          {skills.map((item) => {
            return (
              <span
                className="w-full rounded-lg
               px-4 py-2 border-2 border-gray-300 bg-gray-100"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
