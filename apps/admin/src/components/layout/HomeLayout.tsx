import { Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import SideMenuBar from "../core/Dashboard/SideMenuBar.tsx";
import { Input } from "../ui/input.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar.tsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu.tsx";
import { ModeToggle } from "../reusable/mode-toggle.tsx";

const HomeLayout = () => {
  return (
    <div className={"w-screen flex flex-row gap-1 fixed"}>
      <SideMenuBar />
      <div className={"flex flex-col  w-full p-4"}>
        <div className={"flex flex-row justify-between"}>
          <div
            className={
              "flex flex-row justify-center items-center border px-2 rounded-lg border-slate-200 bg-white]"
            }
          >
            <CiSearch size={20} className={"bg-white"} />
            <Input
              type={"text"}
              placeholder={"Search anything ?"}
              className={"outline-none border-none"}
            />
          </div>

          <div className={"flex flex-row justify-center items-center"}>
            <div className={"rounded-full"}>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/68776478?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Ramkumar kushwah
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={"flex flex-col gap-3 w-52 h-60"}
                  >
                    <NavigationMenuLink>Account</NavigationMenuLink>
                    <NavigationMenuLink>Settings</NavigationMenuLink>
                    <NavigationMenuLink>Sign Out</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <IoNotifications size={25} />
            <ModeToggle />
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
