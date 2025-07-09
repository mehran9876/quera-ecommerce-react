import type { OrderType } from "../../types/ordersTypes";
import OrderDetailedTableData from "./OrderDetailedTableData";

const OrderDetailedTable = ({ order }: { order: OrderType }) => {
  return (
    <div className="border-inputBorder max-h-min rounded-sm border-1 p-6">
      <table className="table table-fixed">
        <thead>
          <tr>
            <th className="text-center">عکس</th>
            <th className="w-2/8">نام محصول</th>
            <th className="w-1/8 text-center">تعداد</th>
            <th className="text-left">قیمت</th>
            <th className="text-left">قیمت نهایی</th>
          </tr>
        </thead>
        <tbody>
          {order.orderItems.map((item) => (
            <OrderDetailedTableData item={item} key={item._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailedTable;
