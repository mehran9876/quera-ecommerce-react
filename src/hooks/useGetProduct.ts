import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useGetProduct = (_id: string) => {
  return useQuery({
    queryKey: [`product-${_id}`],
    queryFn: () =>
      axiosInstance.get(`api/products/${_id}`).then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
