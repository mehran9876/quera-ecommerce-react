import { useCartStore } from "../stores/use-cart-store";
import { useGetProduct } from "../hooks/useGetProduct";
import Input from "../components/general/Input";
import { useState } from "react";
import StepButton from "../components/shoppingProgress/StepButton";
import StepLine from "../components/shoppingProgress/StepLine";

const UserShoppingProgressPage = () => {
  const [step, setStep] = useState(1);
  const cart = useCartStore(({ cart }) => cart);

  return (
    <section className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex w-2/5 items-center justify-center gap-4">
        <StepButton onClick={() => setStep(1)} active={step >= 1}>
          ورود
        </StepButton>
        <StepLine active={step >= 2} />
        <StepButton onClick={() => setStep(2)} active={step >= 2}>
          اطلاعات تحویل
        </StepButton>
        <StepLine active={step >= 3} />
        <StepButton onClick={() => setStep(3)} active={step >= 3}>
          پرداخت
        </StepButton>
      </div>

      {/* table part */}
      <div className="flex w-4/5 flex-col">
        <h4>خلاصه سفارشات</h4>

        <table className="table">
          <thead>
            <tr>
              <th>عکس</th>
              <th>نام محصول</th>
              <th>تعداد</th>
              <th>قیمت</th>
              <th>قیمت نهایی</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((product) => (
              <ProductTableData key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const ProductTableData = ({
  product,
}: {
  product: { _id: string; quantity: number };
}) => {
  const {
    data: productObj,
    isLoading,
    isError,
    error,
  } = useGetProduct(product._id);
  const handleQuantityChange = useCartStore((state) => state.changeQuantity);

  if (isLoading)
    return (
      <tr aria-colspan={5}>
        <td>loading...</td>
      </tr>
    );
  if (isError)
    return (
      <tr aria-colspan={5}>
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

export default UserShoppingProgressPage;
