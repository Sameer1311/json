import React from "react";
import Mode from "./Mode";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const Navbar = () => {
  return (
    <nav className="flex w-screen items-center justify-evenly shadow-md px-6 py-3 sticky top-0 z-50">
      
      <div className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-500 cursor-pointer transition-colors">
        JSON USER
      </div>

      
      <ul className="flex items-center space-x-8 text-gray-700 dark:text-gray-300">
      <a href="#user_details">
      <Tooltip>
  <TooltipTrigger>
     <li className="hover:text-blue-500 cursor-pointer transition-colors font-medium">
          Add User
        </li>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add new user</p>
  </TooltipContent>
</Tooltip>
       
      </a>
        <a href="#add_user">
          <Tooltip>
            <TooltipTrigger>
              <li className="hover:text-blue-500 cursor-pointer transition-colors font-medium">
                All Users
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>View all users</p>
            </TooltipContent>
          </Tooltip>
        </a>
        <li>
          <Mode />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
