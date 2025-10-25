import { Sun , Moon } from "lucide-react";
import { useTheme } from "./themeprovider";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export const Mode = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Tooltip>
  <TooltipTrigger>
     <div 
        className="`  border-black dark:border-white rounded-xl bg-white dark:bg-black p-1 hover:cursor-pointer">
            {theme === "dark" ? (
                <Sun width={18} onClick={() => setTheme("light")} />
            ) : (
                <Moon width={18} onClick={() => setTheme("dark")} />
            )}
        </div>
  </TooltipTrigger>
  <TooltipContent>
    <p>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</p>
  </TooltipContent>
</Tooltip>
       
    );
};
export default Mode;