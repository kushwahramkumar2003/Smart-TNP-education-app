import { Outlet } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import SideMenuBar from "../../core/Dashboard/SideMenuBar.tsx";
import { Input } from "../../ui/input.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar.tsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu.tsx";
import { ModeToggle } from "../mode-toggle.tsx";
import SideMenuResponsive from "../../core/Dashboard/SideMenuResponsive.tsx";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "@repo/store";

function extractInitials(fullName: string): string {
  let words = fullName.split(" ");
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0);
  }
  return initials;
}

const HomeLayout = () => {
  const user = useRecoilValue(userAtom);
  const [_userState, setUserState] = useRecoilState(userAtom);
  const handleSignOut = () => {
    setUserState(null);
    document.cookie.split(";").forEach(function (cookie) {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    history.pushState("/login", "", "/login");
    localStorage.removeItem("user");
  };
  return (
    <div className={"w-screen flex flex-row gap-1 fixed"}>
      <SideMenuBar />

      <div className={"flex flex-col  w-full p-4"}>
        <div className={"flex flex-row justify-between"}>
          <SideMenuResponsive />

          <form
            action=""
            className={
              " flex-row justify-center items-center border px-2 rounded-lg border-slate-200 bg-white lg:flex hidden dark:bg-inherit dark:border-inherit "
            }
          >
            {/* <CiSearch size={20} className={"bg-white"} /> */}
            <Input
              type={"text"}
              placeholder={"Search anything ?"}
              className={
                "outline-none border-none focus-within:outline-none focus:outline-none"
              }
            />
          </form>

          {user && (
            <div
              className={
                "flex flex-row justify-center items-center gap-3 lg:gap-1"
              }
            >
              <div className={"rounded-full"}>
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>
                    {extractInitials(user?.name ? user?.name : "")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <NavigationMenu className="lg:flex hidden">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{user.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className={"flex flex-col "}>
                      <NavigationMenuLink
                        href="/profile"
                        className={navigationMenuTriggerStyle()}
                      >
                        Account
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/settings"
                        className={navigationMenuTriggerStyle()}
                      >
                        Settings
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        onClick={handleSignOut}
                        href="#"
                        className={navigationMenuTriggerStyle()}
                      >
                        Sign Out
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <IoNotifications size={25} className="lg:flex hidden" />
              <ModeToggle />
            </div>
          )}
        </div>
        <main className="mt-3 w-full h-screen overflow-y-scroll pb-28 bg-primary bg-red-50 rounded-lg p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
