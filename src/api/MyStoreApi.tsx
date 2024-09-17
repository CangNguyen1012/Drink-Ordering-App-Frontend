import { Store } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyStoreRequest = async (): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get store");
    }

    return response.json();
  };

  const { data: store, isLoading } = useQuery(
    "fetchMyStore",
    getMyStoreRequest
  );

  return { store, isLoading };
};

export const useCreateMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyStoreRequest = async (
    storeFormData: FormData
  ): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: storeFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create store");
    }

    return response.json();
  };

  const {
    mutate: createStore,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyStoreRequest);

  if (isSuccess) {
    toast.success("Store created successfully");
  }

  if (error) {
    toast.error("Unable to update store");
  }

  return { createStore, isLoading };
};
