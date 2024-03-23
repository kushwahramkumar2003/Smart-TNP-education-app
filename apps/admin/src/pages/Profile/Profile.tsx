import { Button } from "../../components/ui/button";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row rounded-xl">
        <div className="flex flex-col w-full absolute">
          <img
            src="https://t3.ftcdn.net/jpg/06/71/07/40/240_F_671074077_KpgkMGWOEFOVs5yo3ZMGMA3J88288A4N.jpg"
            className="w-full h-36"
          />
          <div className="flex w-full h-36 border " />
        </div>
        <div className="relative top-24 left-20">
          <img
            className="rounded-full h-20 w-20"
            src={"https://avatars.githubusercontent.com/u/68776478?v=4"}
            alt="img"
          />
          <p className="text-xl text-slate-600">Ramkumar kushwah</p>
          <p className="text-lg text-slate-400">Full-Stack Web developer</p>
        </div>
        <div className="relative top-24 left-2/3 gap-12 flex flex-col  items-center">
          <Button className=" ">Edit Profile</Button>
          <div className="flex flex-row gap-4 ">
            <FaInstagram size={24} />
            <CiFacebook size={24} />
            <RxTwitterLogo size={24} />
            <CiLinkedin size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
