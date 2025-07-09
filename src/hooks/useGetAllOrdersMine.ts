import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useGetAllOrdersMine = () => {
  return useQuery({
    queryKey: ["orders-mine"],
    queryFn: () =>
      axiosInstance.get(`/api/orders/mine`).then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
