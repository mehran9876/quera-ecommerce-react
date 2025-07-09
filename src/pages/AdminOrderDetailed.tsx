// import { useLoaderData } from "react-router";
import OrderDetailedSummary from "../components/orders/OrderDetailedSummary";
import OrderDetailedTable from "../components/orders/OrderDetailedTable";
import type { OrderType } from "../types/ordersTypes";

const order: OrderType = {
  shippingAddress: {
    address: "اصفهان انتهای خیابان کاوه کوچه 6 بن بست 2 پلاک 36",
    city: "اصفهان",
    postalCode: "8463783838",
  },
  paymentResult: {
    update_time: "1751986040632",
  },
  _id: "68698b9fe700e7d8beb7d5b3",
  user: {
    _id: "6849d15384b146939019c317",
    username: "farsahad",
  },
  orderItems: [
    {
      name: "laptop",
      qty: 1,
      price: 15000000,
      image: "https://qbc9.liara.run/uploads/image-1751048224473.png",
      product: "685ee105e700e7d8beb7b51a",
      _id: "68698b9fe700e7d8beb7d5b4",
    },
    {
      name: "test product",
      qty: 1,
      price: 150000,
      image: "https://qbc9.liara.run/uploads/image-1749668835681.JPG",
      product: "6849d43c84b146939019c32a",
      _id: "68698b9fe700e7d8beb7d5b5",
    },
    {
      name: "I phone 16",
      qty: 1,
      price: 89720000,
      image: "https://qbc9.liara.run/uploads/IPhone16.jpg",
      product: "6862e311e700e7d8beb7b5fe",
      _id: "68698b9fe700e7d8beb7d5b6",
    },
  ],
  itemsPrice: 104870000,
  taxPrice: 10487000,
  shippingPrice: 0,
  totalPrice: 115357000,
  isPaid: true,
  isDelivered: true,
  createdAt: "2025-07-05T20:31:27.597Z",
  updatedAt: "2025-07-08T14:47:20.636Z",
  __v: 0,
  deliveredAt: "2025-07-08T08:31:31.041Z",
  paidAt: "2025-07-08T14:47:20.632Z",
};

export default function AdminOrderDetailed() {
  // const order = useLoaderData();

  return (
    <section className="mt-24 mr-30 ml-40 grid grid-cols-[6fr_4fr] gap-14">
      <OrderDetailedTable order={order} />

      <OrderDetailedSummary order={order} />
    </section>
  );
}
