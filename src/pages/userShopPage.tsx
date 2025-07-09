import ProductLayoutFull from "../components/general/ProductLayoutFull";
import UserShopSidebar from "../components/userShopSidebar";
import type { ProductType } from "../types/productType";
import { useSearchParams } from "react-router";
import { useGetFilteredProducts } from "../hooks/useGetFilteredProducts";

const UserShopPage = () => {
  const [filters] = useSearchParams();

  const {
    data: products,
    isPending,
    isError,
  } = useGetFilteredProducts(filters);

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
