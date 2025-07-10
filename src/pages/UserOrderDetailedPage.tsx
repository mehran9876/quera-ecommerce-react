// import { useLoaderData } from "react-router";
import { order } from "../assets/testData";
import OrderDetailedSummary from "../components/orders/OrderDetailedSummary";
import OrderDetailedTable from "../components/orders/OrderDetailedTable";

export default function UserOrderDetailedPage() {
  // const order = useLoaderData();

  return (
    <section className="mt-24 mr-30 ml-40 grid grid-cols-[6fr_4fr] gap-14">
      <OrderDetailedTable order={order} />
      <OrderDetailedSummary order={order} />
    </section>
  );
}
