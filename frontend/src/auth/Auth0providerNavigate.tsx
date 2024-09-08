import { useCreateMyUser } from "@/api/MyUserApi";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { User } from "@auth0/auth0-react";
import { AppState } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const Auth0providerNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  // const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri) {
    throw new Error(
      "Unable to initialize Auth0: Missing domain, client ID, or redirect URI."
    );
  }

  const onRedirectCallback = async (appState?: AppState, user?: User) => {
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
