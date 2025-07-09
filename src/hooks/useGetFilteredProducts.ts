import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useGetFilteredProducts = (filters: URLSearchParams) => {
  const payload = {
    categories: filters.getAll("categories") || [],
    price: [
      filters.get("minPrice") || "0",
      filters.get("maxPrice") || "200000000000",
    ],
  };

  return useQuery({
    queryKey: ["products", filters.toString()],
    queryFn: () =>
      axiosInstance
        .post(`/api/products/filtered`, payload)
        .then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
