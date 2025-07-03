import ProductLayoutFull from "../../layouts/ProductLayoutFull";
import UserShopSidebar from "./userShopSidebar";
import type { ProductType } from "../../types/productType";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { useSearchParams } from "react-router";

const UserShopPage = () => {
  const [filters] = useSearchParams();
  const payload = {
    categories: filters.getAll("categories") || [],
    price: [
      filters.get("minPrice") || "0",
      filters.get("maxPrice") || "200000000000",
    ],
  };

  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products", filters.toString()],
    queryFn: () =>
      axiosInstance
        .post(`/api/products/filtered`, payload)
        .then((res) => res.data),
  });

  return (
    <section className="mt-5 mr-20 ml-20 flex">
      <UserShopSidebar />

      <div>
        <div className={`grid w-full auto-rows-min grid-cols-3 gap-6`}>
          {isPending && <p>loading...</p>}
          {isError && <p>error</p>}
          {!isPending &&
            !isError &&
            products?.map((product: ProductType) => (
              <ProductLayoutFull product={product} key={product._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default UserShopPage;
