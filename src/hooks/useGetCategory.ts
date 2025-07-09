import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useGetCategory = (_id: string) => {
  return useQuery({
    queryKey: ["category", _id],
    queryFn: () =>
      axiosInstance.get(`/api/category/${_id}`).then((res) => res.data),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });
};
