import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { Sheet } from "lucide-react";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { MobileNavLink } from "./MobileNavLink";
export const Mobilenav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" text-red-500 " />
      </SheetTrigger>
      <SheetContent className="text-black bg-white">
        <SheetTitle className="pb-3">
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-red-500"></CircleUserRound>
              {user?.email}
            </span>
          ) : (
            <span className=" text-red-500">Welcome to FoodieFlick</span>
          )}
          <Separator className="mt-1 border-2 border-red-400" />
        </SheetTitle>
        <SheetDescription className=" flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLink />
          ) : (
            <Button
              className="flex-1 font-bold bg-red-500 rounded hover:bg-red-950 text-white"
              onClick={async () => {
                await loginWithRedirect();
              }}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
