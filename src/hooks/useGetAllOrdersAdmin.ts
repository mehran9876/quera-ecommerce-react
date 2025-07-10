import { useQuery } from "@tanstack/react-query";

import type { OrderType } from "../types/ordersTypes";

import axiosInstance from "../utils/axios";

export const useGetAllOrdersAdmin = () => {
  return useQuery<OrderType[]>({
    queryKey: ["orders-admin"],
    queryFn: () => axiosInstance.get(`/api/orders`).then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
