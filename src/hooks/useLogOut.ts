import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useLogOut = () => {
  return useMutation({
    mutationFn: () =>
      axiosInstance.post("/api/users/logout").then((res) => res.data),
  });
};
