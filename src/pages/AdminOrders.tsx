// import { orders } from "../assets/testData";

import { orders } from "../assets/testData";
import OrdersTableData from "../components/orders/OrdersTableData";
// import { useGetAllOrdersAdmin } from "../hooks/useGetAllOrdersAdmin";

export default function AdminOrders() {
  // const { data: orders, isLoading, isError } = useGetAllOrdersAdmin();
  const isError = false;
  const isLoading = false;

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
          {isError && <tr>error</tr>}
          {!isError &&
            !isLoading &&
            orders?.map((order) =>
              order.orderItems.map((item) => (
                <OrdersTableData order={order} key={item._id} item={item} />
              )),
            )}
        </tbody>
      </table>
    </div>
  );
}
