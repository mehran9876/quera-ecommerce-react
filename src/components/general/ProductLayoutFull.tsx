import { Link } from "react-router-dom";
import { CartIcon } from "../../assets/icons";
import type { ProductType } from "../../assets/testData";
import { useGetCategory } from "../../hooks/useGetCategory";
import Badge from "./Badge";
import Button from "./button";
import FavoriteButton from "./FavoriteButton";
import { useCartStore } from "../../stores/use-cart-store";

interface ProductLayoutFullProps {
  product: ProductType;
}
const ProductLayoutFull = ({ product }: ProductLayoutFullProps) => {
  const {
    isError,
    isLoading,
    data: category,
  } = useGetCategory(product.category);
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    addToCart(product._id);
  };

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
          className="absolute right-2 bottom-2 text-sm"
          text={isError ? "error" : isLoading ? "loading" : category.name}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-xl">{product.name}</h4>
          <span className="text-primaryPink">
            {Intl.NumberFormat("fa-IR").format(product.price)} تومان
          </span>
        </div>
        <p className={`mb-3 line-clamp-2 min-h-12 text-[#9CA3AF]`}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <Link to={`/product/${product._id}`} className="cursor-pointer">
            <Button>مشاهده بیشتر &larr;</Button>
          </Link>
          <button
            className="btn btn-ghost aspect-square rounded-lg border-0 bg-transparent p-0"
            onClick={handleAddToCart}
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </figure>
  );
};

export default ProductLayoutFull;
