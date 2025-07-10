import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import type { ProductType } from "../assets/testData";

type AllProductsPagType = {
  page: number;
  total: number;
  hasMore: boolean;
  products: ProductType[];
};
export const useGetAllProductsPag = () => {
  return useQuery<AllProductsPagType>({
    queryKey: [`products-pagination-10`],
    queryFn: () =>
      axiosInstance.get(`/api/products?size=10&page=1`).then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
