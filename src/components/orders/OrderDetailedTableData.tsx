import type { OrderItemType } from "../../types/ordersTypes";
import persianNumberFormatter from "../../utils/persianNumberFormatter";

interface OrderDetailedTableDataProps {
  item: OrderItemType;
}
const OrderDetailedTableData = ({ item }: OrderDetailedTableDataProps) => {
  return (
    <tr>
      <td className="flex justify-center">
        <img
          className="aspect-square w-16"
          src={item.image}
          alt={`image ${item.name}`}
        />
      </td>
      <td>{item.name}</td>
      <td className="text-center">{persianNumberFormatter(item.qty)}</td>
      <td className="text-left">{persianNumberFormatter(item.price)}</td>
      <td className="text-left">
        {persianNumberFormatter(item.qty * item.price)}
      </td>
    </tr>
  );
};

export default OrderDetailedTableData;
