import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { CircleUserRound } from "lucide-react";
// import React from "react";
import { Link } from "react-router-dom";

export const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-red-500 gap-2">
        <CircleUserRound className="text-red-500"></CircleUserRound>
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white w-[150%] items-center justify-center pl-[20%] border-2 rounded  shadow-sm">
        <DropdownMenuItem className=" w-[80%]">
          <Link
            to="/User-Profile"
            className="md:font-bold hover:text-red-500 w-[5] bo"
          >
            UserProfile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className=" w-[80%]">
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold hover:text-red-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
