// import { orders } from "../assets/testData";
import OrdersTableData from "../components/orders/OrdersTableData";
import { useGetAllOrdersMine } from "../hooks/useGetAllOrdersMine";

export default function UserOrdersPage() {
  const { data: orders, isLoading, isError, error } = useGetAllOrdersMine();

  return (
    <div className="mx-22 my-30 **:text-center">
      <table className="table table-fixed">
        {/* head */}
        <thead>
          <tr>
            <th>عکس</th>
            <th className="w-2/8">نام محصول</th>
            <th>تاریخ</th>
            <th>کاربر</th>
            <th>قیمت نهایی</th>
            <th>پرداخت</th>
            <th>ارسال</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isLoading && <tr>loading...</tr>}
          {isError && <tr>{error.message}</tr>}
          {orders?.map((order) =>
            order.orderItems.map((item) => (
              <OrdersTableData order={order} key={item._id} item={item} />
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}
