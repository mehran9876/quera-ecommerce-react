import { Link } from "react-router";
import ProductSlider from "./components/ProductSlider";
import ProductLayoutCompact from "./components/general/ProductLayoutCompact";
import Button from "./components/general/button";
import { useGetAllProductsPag } from "./hooks/getAllProductsPagination";
import { useGetNewProducts } from "./hooks/useGetNewProducts";

const App = () => {
  const {
    data: newProducts,
    isError: isErrorNew,
    isLoading: isLoadingNew,
  } = useGetNewProducts();
  const {
    data: AllProducts,
    isError: isErrorAll,
    isLoading: isLoadingAll,
  } = useGetAllProductsPag();

  if (isErrorNew || isErrorAll) return <p>error</p>;
  if (isLoadingNew || isLoadingAll) return <p>loading...</p>;
  console.log(AllProducts?.products);
  return (
    <div className="flex flex-col justify-start p-6">
      <div className="mb-8 flex gap-20">
        <div className="relative grid grid-cols-2 gap-4">
          {AllProducts?.products.slice(0, 4).map((product) => (
            <div key={product._id} className="relative">
              <ProductLayoutCompact
                productName={product.name}
                size="small"
                product={product}
              />
            </div>
          ))}
        </div>
        <ProductSlider products={newProducts} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-0">
          <h2 className="text-xl">محصولات ویژه</h2>
          <div className="cursor-pointer">
            <Link to="products">
              <Button>فروشگاه</Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-14">
          {AllProducts?.products.slice(4, 8).map((product) => (
            <div key={product._id} className="relative">
              <ProductLayoutCompact
                productName={product.name}
                size="small"
                product={product}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-14">
          <div className="col-span-1" />
          {AllProducts?.products.slice(8).map((product) => (
            <div key={product._id} className="relative">
              <ProductLayoutCompact
                productName={product.name}
                size="small"
                product={product}
              />
            </div>
          ))}
          <div className="col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default App;
