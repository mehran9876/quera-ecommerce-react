import { CartIcon } from "../assets/icons";
import type { ProductType } from "../assets/testData";
import Button from "../components/general/button";

interface ProductLayoutFullProps {
  product: ProductType;
}
const ProductLayoutFull = ({ product }: ProductLayoutFullProps) => {
  return (
    <figure className="bg-bgCard max-w-96 overflow-hidden rounded-lg">
      <div className="h-42.5 overflow-hidden">
        <img className="object-cover" src={product.image} alt={product.name} />
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
          <Button>مشاهده بیشتر &larr;</Button>
          <div className="p-2">
            <CartIcon />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ProductLayoutFull;
