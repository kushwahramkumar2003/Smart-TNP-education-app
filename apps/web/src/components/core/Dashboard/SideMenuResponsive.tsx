import { menuItems } from "../../data/menuData";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Button } from "../../ui/button";

import { Input } from "../../ui/input";
import { useState } from "react";

const SideMenuResponsive = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <RxHamburgerMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col bg-primary text-white gap-10 justify-start items-start dark:bg-gray-900 "
      >
        <form
          action=""
          className="flex flex-row justify-center items-center gap-4 mt-8"
        >
          <Input
            type={"text"}
            placeholder={"Search anything ?"}
            className={"outline-none border-none max-w-52"}
          />
          <Button variant="secondary">Search</Button>
        </form>

        <div className="flex flex-col gap-3">
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem.title}
              to={menuItem.to}
              onClick={() => setIsSheetOpen(false)}
              className={
                "hover:bg-white rounded-lg p-2 transition-all duration-200 hover:text-primary dark:hover:bg-primary dark:hover:text-white"
              }
            >
              <div
                className={
                  "gap-2 flex flex-row justify-start items-center text-center"
                }
              >
                {menuItem.icon}
                <p className={"text-lg "}>{menuItem.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenuResponsive;
