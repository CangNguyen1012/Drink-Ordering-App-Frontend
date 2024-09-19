import { StoreSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchStores = (city?: string) => {
  const createSearchRequest = async (): Promise<StoreSearchResponse> => {
    const response = await fetch(`${API_BASE_URL}/api/store/search/${city}`);

    if (!response.ok) {
      throw new Error("Failed to get stores");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchStores"],
    createSearchRequest,
    { enabled: !!city }
  );

  return { results, isLoading };
};
