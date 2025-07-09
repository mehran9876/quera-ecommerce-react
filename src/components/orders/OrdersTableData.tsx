import { Link } from "react-router";
import persianDateFormatter from "../../utils/persianDateFormatter";
import persianNumberFormatter from "../../utils/persianNumberFormatter";
import Badge from "../general/Badge";
import Button from "../general/button";
import type { OrderItemType, OrderType } from "../../types/ordersTypes";

interface OrdersTableDataProps {
  order: OrderType;
  item: OrderItemType;
}
const OrdersTableData = ({ order, item }: OrdersTableDataProps) => {
  return (
    <tr className="border-b-0">
      <td className="flex justify-center">
        <img
          className="aspect-square w-16"
          src={item.image}
          alt={`image ${item.name}`}
        />
      </td>
      <td>{item.name}</td>
      <td>{persianDateFormatter(order.updatedAt)}</td>
      <td>{order.user?.username}</td>
      <td>{persianNumberFormatter(item.qty * item.price)}</td>
      <td>
        {order.isPaid ? (
          <Badge
            text="پرداخت شده"
            className="bg-green-400 !px-2 py-0.5 text-sm"
          />
        ) : (
          <Badge
            text="پرداخت نشده"
            className="bg-red-400 !px-2 py-0.5 text-sm"
          />
        )}
      </td>
      <td>
        {order.isDelivered ? (
          <Badge
            text="ارسال شده"
            className="bg-green-400 !px-2 py-0.5 text-sm"
          />
        ) : (
          <Badge
            text="ارسال نشده"
            className="bg-red-400 !px-2 py-0.5 text-sm"
          />
        )}
      </td>
      <td>
        <Button>
          <Link to={`${order._id}`}>جزئیات</Link>
        </Button>
      </td>
    </tr>
  );
};

export default OrdersTableData;
