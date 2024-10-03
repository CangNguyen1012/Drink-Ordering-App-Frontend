import { Order, Store } from "@/types";
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
    toast.error("Unable to create store");
  }

  return { createStore, isLoading };
};

export const useUpdateMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyStoreRequest = async (
    storeFormData: FormData
  ): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: storeFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to update store");
    }

    return response.json();
  };

  const {
    mutate: updateStore,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateMyStoreRequest);

  if (isSuccess) {
    toast.success("Store update successfully");
  }

  if (error) {
    toast.error("Unable to update store");
  }

  return { updateStore, isLoading };
};

export const useGetMyStoreOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyStoreOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyStoreOrders",
    getMyStoreOrdersRequest
  );

  return { orders, isLoading };
};

type UpdateOrderStatusRequest = {
  orderId: string;
  status: string;
};

export const useUpdateMyStoreOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyStoreOrder = async (
    updateStatusOrderRequest: UpdateOrderStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/store/order/${updateStatusOrderRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStatusOrderRequest),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update order status");
    }

    return response.json();
  };

  const {
    mutateAsync: updateStoreStatus,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(updateMyStoreOrder);

  if (isSuccess) {
    toast.success("Order status updated successfully");
  }

  if (isError) {
    toast.error("Unable to update order status");
    reset();
  }
  return { updateStoreStatus, isLoading };
};
