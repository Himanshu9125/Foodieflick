import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
export const MobileNavLink = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <Link
        to="/User-Profile"
        className="font-bold hover:text-red-500 w-[5] border-red-500 "
      >
        UserProfile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex flex-1 text-white font-extrabold hover:text-red-500 hover:bg-slate-800 rounded-xl w-full bg-black mt-5"
      >
        Log Out
      </Button>
    </div>
  );
};
