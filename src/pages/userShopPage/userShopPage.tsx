import ProductLayoutFull from "../../layouts/ProductLayoutFull";
import UserShopSidebar from "./userShopSidebar";
import type { ProductsPagination, ProductType } from "../../types/productType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { useState } from "react";

const UserShopPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const queryClient = useQueryClient();

  const {
    data: productsPagination,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productsPagination"],
    queryFn: () =>
      axiosInstance
        .get<ProductsPagination>(`/api/products?size=10&page=${pageNum}`)
        .then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (newPage: number) =>
      //   axiosInstance.get(`/api/products?size=10&page=${newPage}`),
      axiosInstance.get(`/api/products?size=10&page=${newPage}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["productsPagination"] }),
  });

  const handlePageNum = (page: number) => {
    setPageNum(() => page);
    mutation.mutate(page);
  };

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;

  const { products, page: apiPage, hasMore } = productsPagination!;

  return (
    <section className="mt-5 mr-20 ml-20 flex">
      <UserShopSidebar />

      <div>
        <div className={`grid w-full auto-rows-min grid-cols-3 gap-6`}>
          {products?.map((product: ProductType) => (
            <ProductLayoutFull product={product} key={product._id} />
          ))}
        </div>
        {(hasMore || apiPage !== 1) && (
          <div
            dir="ltr"
            className="mt-5 flex items-center justify-center gap-3"
          >
            <button
              disabled={apiPage === 1}
              className="btn btn-ghost"
              onClick={() => handlePageNum(pageNum - 1)}
            >
              &larr;
            </button>
            <span>{pageNum}</span>
            <button
              disabled={!hasMore}
              className="btn btn-ghost"
              onClick={() => handlePageNum(pageNum + 1)}
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserShopPage;
