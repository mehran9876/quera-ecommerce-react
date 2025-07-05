import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export const useCreateReview = (_id: string) => {
  return useMutation({
    mutationFn: (payload: { rating: number; review: string }) =>
      axiosInstance
        .post(`/api/products/${_id}/reviews`, payload)
        .then((res) => res.data),
  });
};
