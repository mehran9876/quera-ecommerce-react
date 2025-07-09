import type { OrderType } from "../../types/ordersTypes";
import persianNumberFormatter from "../../utils/persianNumberFormatter";
import Button from "../general/button";

const OrderDetailedSummary = ({ order }: { order: OrderType }) => {
  return (
    <div className="flex flex-col">
      <h4 className="mb-6 text-xl">آدرس دریافت</h4>
      <div className="mb-6 flex flex-col gap-4">
        <p className="flex gap-2">
          <span className="text-primaryPink">شماره&nbsp;سفارش&nbsp;:</span>
          <span>{order._id}</span>
        </p>
        <p className="flex gap-2">
          <span className="text-primaryPink">نام&nbsp;:</span>
          <span>{order.user?.username}</span>
        </p>
        <p className="flex gap-2">
          <span className="text-primaryPink">ایمیل&nbsp;:</span>
          <span>{order.user?._id}</span> {/* TODO: Get email from api call  */}
        </p>
        <p className="flex items-baseline gap-2">
          <span className="text-primaryPink h-min w-max">آدرس&nbsp;:</span>
          <span>{`${order.shippingAddress.city} ${order.shippingAddress.address}`}</span>
        </p>
        <p className="flex gap-2">
          <span className="text-primaryPink">روش&nbsp;پرداخت&nbsp;:</span>
          <span>درگاه پرداخت پاسارگاد</span>{" "}
          {/* TODO: Get payment method from api  */}
        </p>
      </div>

      <div className="bg-bgCard border-inputBorder mb-8 rounded-sm border px-2.5 py-2">
        Status
      </div>

      <h3 className="mb-6 text-xl">خلاصه خرید</h3>

      <div className="mb-8 flex flex-col gap-4">
        <p className="flex justify-between">
          <span className="text-placeholder">قیمت&nbsp;محصولات&nbsp;:</span>
          <span>
            {order.itemsPrice
              ? persianNumberFormatter(order.itemsPrice) + " تومان"
              : "رایگان"}{" "}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-placeholder">هزینه&nbsp;ارسال&nbsp;:</span>
          <span>
            {order.shippingPrice
              ? persianNumberFormatter(order.shippingPrice) + " تومان"
              : "رایگان"}{" "}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-placeholder">مالیات&nbsp;:</span>
          <span>
            {order.taxPrice
              ? persianNumberFormatter(order.taxPrice) + " تومان"
              : "رایگان"}{" "}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-placeholder">مبلغ نهایی&nbsp;:</span>
          <span>
            {order.totalPrice
              ? persianNumberFormatter(order.totalPrice) + " تومان"
              : "رایگان"}{" "}
          </span>
        </p>
      </div>

      <Button>ارسال شد</Button>
    </div>
  );
};

export default OrderDetailedSummary;
