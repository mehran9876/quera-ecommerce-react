import OrderDetailedTable from "../components/orders/OrderDetailedTable";
import OrderDetailedSummary from "../components/orders/OrderDetailedSummary";
import { order } from "../assets/testData";

const UserCheckoutPage = () => {
  // const order = useLoaderData();

  return (
    <section className="mt-24 mr-30 ml-40 grid grid-cols-[6fr_4fr] gap-14">
      <OrderDetailedTable order={order} />
      <OrderDetailedSummary
        order={order}
        button
        buttonText="پرداخت"
        onClick={() => console.log("پرداخت شد")}
      />
    </section>
  );
};

export default UserCheckoutPage;
