import { SearchState } from "@/pages/SearchPage";
import { StoreSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchStores = (searchState: SearchState, city?: string) => {
  const createSearchRequest = async (): Promise<StoreSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/store/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get stores");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchStores", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return { results, isLoading };
};
