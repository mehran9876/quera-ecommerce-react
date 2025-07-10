import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import type { NewOrderType } from "../types/ordersTypes";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (payload: NewOrderType) =>
      axiosInstance.post("/api/orders", payload).then((res) => res.data),
  });
};
