import { Link } from "react-router-dom";
import { CartIcon } from "../../assets/icons";
import type { ProductType } from "../../assets/testData";
import { useCategory } from "../../hooks/useCategory";
import Badge from "./Badge";
import Button from "./button";
import FavoriteButton from "./FavoriteButton";

interface ProductLayoutFullProps {
  product: ProductType;
}
const ProductLayoutFull = ({ product }: ProductLayoutFullProps) => {
  const { isError, isLoading, data: category } = useCategory(product.category);

  return (
    <figure className="bg-bgCard max-w-96 overflow-hidden rounded-lg">
      <div className="relative h-42.5 overflow-hidden">
        <Link to={`/product/${product._id}`}>
          <img
            className="object-cover"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <FavoriteButton _id={product._id} className="absolute top-3 right-3" />
        <Badge
          className="absolute right-2 bottom-2"
          text={isError ? "error" : isLoading ? "loading" : category.name}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-xl">{product.name}</h4>
          <span className="text-primaryBtnPink">
            {Intl.NumberFormat("fa-IR").format(product.price)} تومان
          </span>
        </div>
        <p className="mb-3 text-[#9CA3AF]">{product.description}</p>
        <div className="flex items-center justify-between">
          <Link to={`/product/${product._id}`} className="cursor-pointer">
            <Button>مشاهده بیشتر &larr;</Button>
          </Link>
          <div className="p-2">
            <CartIcon />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ProductLayoutFull;
