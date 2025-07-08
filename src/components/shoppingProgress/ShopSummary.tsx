import { useCallback, useState } from "react";
import type { CartItem } from "../../types/cartTypes";
import Button from "../general/button";
import ProductTableData from "./ProductTableRowData";

interface ShopSummaryProps {
  cart: CartItem[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
}
const ShopSummary = ({
  cart,
  shippingAddress,
  paymentMethod,
}: ShopSummaryProps) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = useCallback((priceSum: number) => {
    setTotalPrice((curSum: number) => curSum + priceSum);
  }, []);

  return (
    <div className="flex w-4/5 flex-col gap-5">
      <table className="mb-5 table">
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
            <ProductTableData
              key={product._id}
              product={product}
              handleTotalPrice={handleTotalPrice}
            />
          ))}
        </tbody>
      </table>

      <h4 className="text-2xl">خلاصه سفارشات</h4>
      <div className="bg-bgFilterMenu flex justify-between p-8">
        <div className="space-y-4">
          <h4 className="text-2xl">روش پرداخت</h4>
          <p>
            <span className="text-placeholder">روش : </span>
            {paymentMethod === "pasargad" && "درگاه پرداخت پاسارگاد"}
            {paymentMethod === "saman" && "درگاه پرداخت سامان"}
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl">آدرس دریافت</h4>
          <p>
            <span className="text-placeholder">آدرس : </span>
            {`${shippingAddress.city} ${shippingAddress.address}`}
          </p>
        </div>
        <div className="w-75 space-y-1">
          <p className="flex justify-between">
            <span className="text-placeholder">قیمت محصولات :</span>
            <span>{Intl.NumberFormat("fa-IR").format(totalPrice)} تومان</span>
          </p>
          <p className="flex justify-between">
            <span className="text-placeholder">هزینه ارسال :</span>
            <span>۱۰,۰۰۰ تومان</span>
          </p>
          <p className="flex justify-between">
            <span className="text-placeholder">مالیات :</span>
            <span>۱۰,۰۰۰ تومان</span>
          </p>
          <p className="flex justify-between">
            <span className="text-placeholder">مبلغ نهایی :</span>
            <span>
              {Intl.NumberFormat("fa-IR").format(totalPrice + 20000)} تومان
            </span>
          </p>
        </div>
      </div>
      <Button>ثبت سفارش</Button>
    </div>
  );
};

export default ShopSummary;
