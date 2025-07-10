import { useEffect, useRef } from "react";
import { useGetProduct } from "../../hooks/useGetProduct";
import { useCartStore } from "../../stores/use-cart-store";
import Input from "../general/Input";
import type { AxiosError } from "axios";
import persianNumberFormatter from "../../utils/persianNumberFormatter";

interface ProductTableDataProps {
  product: { _id: string; quantity: number };
  handleTotalPrice: (priceSum: number) => void;
}

const ProductTableData = ({
  product,
  handleTotalPrice,
}: ProductTableDataProps) => {
  // prettier-ignore
  const {data: productObj, isLoading, isError, error, } = useGetProduct(product._id);
  const { changeQuantity: handleQuantityChange, removeFromCart } =
    useCartStore();
  const hasRun = useRef(false);

  useEffect(() => {
    if (productObj && !hasRun.current) {
      handleTotalPrice(productObj.price * product.quantity);
      hasRun.current = true;
    }
  }, [productObj, handleTotalPrice, product.quantity]);

  useEffect(() => {
    if (isError && (error as AxiosError).response?.status === 404)
      removeFromCart(product._id);
  }, [isError, error, removeFromCart, product._id]);

  if (isLoading)
    return (
      <tr>
        <td colSpan={5}>loading...</td>
      </tr>
    );
  if (isError)
    return (
      <tr>
        <td colSpan={5}>{error.message}</td>
      </tr>
    );

  return (
    <tr>
      <td>
        <img
          src={productObj?.image}
          alt={productObj?.name}
          className="h-8 w-8"
        />
      </td>
      <td>{productObj?.name}</td>
      <td>
        <Input
          id="quantity"
          type="number"
          className="max-w-15 table-fixed"
          value={product.quantity}
          onChange={(e) => handleQuantityChange(product._id, +e.target.value)}
          max={productObj?.quantity}
          min={1}
        />
      </td>
      <td>{persianNumberFormatter(productObj?.price)}</td>
      <td>{persianNumberFormatter(productObj?.price * product.quantity)}</td>
    </tr>
  );
};

export default ProductTableData;
