import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const AdminDashboardPage = (salesData, customers) => {
  const totalSale = 0;
  const customers = 10;
  const totalSoldItems = 100;

  return (
    <div>
      <div
        id="dataContainer"
        className="flex justify-around items-center gap-20 mx-auto w-7/10"
      >
        <div
          id="totalSales"
          className="flex flex-col justify-evenly items-start bg-sidebar-bg pr-3 rounded-lg w-[320px] h-[160px]"
        >
          <p className="bg-primaryPink px-4 py-2 rounded-full font-bold text-base">
            $
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-placeholder">فروش کل</p>
            <p className="text-primaryFont">
              {totalSale}
              <span> تومان</span>
            </p>
          </div>
        </div>
        <div
          id="customers"
          className="flex flex-col justify-evenly items-start bg-sidebar-bg pr-3 rounded-lg w-[320px] h-[160px]"
        >
          <p className="bg-primaryPink px-4 py-2 rounded-full font-bold text-base">
            $
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-placeholder">مشتری ها</p>
            <p className="text-primaryFont">{customers}</p>
          </div>
        </div>
        <div
          id="totalSales"
          className="flex flex-col justify-evenly items-start bg-sidebar-bg pr-3 rounded-lg w-[320px] h-[160px]"
        >
          <p className="bg-primaryPink px-4 py-2 rounded-full font-bold text-base">
            $
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-placeholder">سفارشات</p>
            <p className="text-primaryFont">{totalSoldItems}</p>
          </div>
        </div>
      </div>
      <div className="m-auto p-8 w-9/10">
        <div className="flex justify-start mb-2">
          <span className="font-bold text-placeholder text-sm">
            نمودار فروش
          </span>
        </div>
        <ResponsiveContainer width="100%" height={500} className="rtl">
          <BarChart
            data={salesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis
              reversed
              className="text-placeholder"
              dataKey="date"
              label={{
                value: "تاریخ",
                position: "bottom",
                offset: -10,
                style: {
                  fontSize: 12,
                  fontWeight: "bold",
                },
              }}
            />
            <YAxis
              className="text-placeholder"
              orientation="right"
              axisLine={false}
              ticks={[0, 1, 2, 3, 4, 5]}
              tickMargin={20}
              label={{
                value: "فروش",
                angle: -90,
                position: "right",
                dx: 1710,
                style: {
                  textAnchor: "middle",
                  fontSize: 11,
                  fontWeight: "bold",
                },
              }}
            />

            <Bar
              dataKey="totalAmount"
              className="fill-primaryPink"
              barSize={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
