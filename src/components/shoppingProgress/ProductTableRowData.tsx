import { useEffect } from "react";
import { useGetProduct } from "../../hooks/useGetProduct";
import { useCartStore } from "../../stores/use-cart-store";
import Input from "../general/Input";

interface ProductTableDataProps {
  product: { _id: string; quantity: number };
  handleTotalPrice: (priceSum: number) => void;
}
const ProductTableData = ({
  product,
  handleTotalPrice,
}: ProductTableDataProps) => {
  const {
    data: productObj,
    isLoading,
    isError,
    error,
  } = useGetProduct(product._id);

  const { changeQuantity: handleQuantityChange } = useCartStore();
  useEffect(() => {
    if (productObj) handleTotalPrice(productObj.price * product.quantity);
  }, [productObj, handleTotalPrice, product.quantity]);

  if (isLoading)
    return (
      <tr colspan={5}>
        <td>loading...</td>
      </tr>
    );
  if (isError)
    return (
      <tr colspan={5}>
        <td>{error.message}</td>
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
        />
      </td>
      <td>{productObj?.price}</td>
      <td>{product.quantity * productObj?.price}</td>
    </tr>
  );
};

export default ProductTableData;
