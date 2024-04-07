// SideMenuBar.tsx
import React, { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { menuItems, MenuItem } from "../../data/menuData";

interface SideMenuBarProps {}

const SideMenuBar: React.FC<SideMenuBarProps> = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="w-60 bg-primary text-white max-h-screen transition-all duration-300 h-screen dark:bg-gray-900 lg:flex hidden">
      <div className="flex flex-col pt-6 pl-4 gap-6">
        <div className="flex flex-row gap-2 text-white items-center">
          <span>
            <AiFillDashboard size={25} />
          </span>
          <p className="text-xl font-semibold">Dashboard</p>
        </div>
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <Link
            key={menuItem.title}
            to={menuItem.to}
            className={`hover:bg-white hover:text-red-500 rounded-lg p-2 transition-all duration-200 ${
              selectedItem === index
                ? "bg-white text-red-500"
                : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="gap-2 flex flex-row justify-start items-center text-center">
              {menuItem.icon}
              <p className="text-lg">{menuItem.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenuBar;
