import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import type { ProductType } from "../assets/testData";

export const useGetNewProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: [`new-products`],
    queryFn: () =>
      axiosInstance.get(`/api/products/sort/new`).then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
