import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { UsernameMenu } from "./UsernameMenu";

export const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <span>
          <UsernameMenu />
        </span>
      ) : (
        <Button
          variant={"ghost"}
          className="border-2 rounded border-red-500 font-bold text-red-500 hover:bg-red-500 hover:text-white"
          onClick={async () => {
            await loginWithRedirect();
          }}
        >
          Log In
        </Button>
      )}
    </div>
  );
};
