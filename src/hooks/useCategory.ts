import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useCategory = (_id: string) => {
  return useQuery({
    queryKey: ["category", _id],
    queryFn: () =>
      axiosInstance.get(`/api/category/${_id}`).then((res) => res.data),
  });
};
