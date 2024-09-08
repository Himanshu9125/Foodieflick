import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

const createUserApi = async (user: CreateUserRequest) => {
  const { getAccessTokenSilently } = useAuth0();
  const accessTocken = await getAccessTokenSilently();
  const response = await fetch(`${API_BASE_URL}/api/user`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessTocken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};

export const useCreateMyUser = () => {
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserApi);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
