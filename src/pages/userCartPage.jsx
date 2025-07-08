import React, { useState } from "react";
import removeBtnIcon from "../assets/Vector.png";
import Button from "../components/general/button";

const UserCartPage = (props) => {
  const formatPersianNumber = (number) =>
    new Intl.NumberFormat("fa-IR").format(number);

  const [cartItems, setCartItems] = useState(props.items || []);

  const quantityChangeHandler = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item,
      ),
    );
  };

  const itemRemoveHandler = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
  return (
    <div className="mx-auto w-8/10">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="m-4 flex">
            <div className="ml-4 h-[88px] w-[88px] overflow-hidden rounded-sm object-contain">
              {item.image}
            </div>
            <div className="font-iranYekan flex w-7/10 flex-col gap-2 text-right align-middle text-base">
              <p className="text-primaryPink">{item.name}</p>
              <p className="text-primaryFont">{item.brand}</p>
              <p className="text-primaryFont font-bold">
                {formatPersianNumber(item.price)}
                <span className="pr-2">تومان</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <select
                className="border-select w-20 rounded-sm p-1"
                value={item.quantity}
                onChange={(e) => quantityChangeHandler(item.id, e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button onClick={() => itemRemoveHandler(item.id)} type="button">
                <img src={removeBtnIcon} alt="removeBtnIcon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="items-right font-iranYekan flex w-1/2 flex-col justify-center gap-2 pr-10 text-right">
        <p className="text-primaryFont text-xl">
          تعداد ({formatPersianNumber(totalItems)})
        </p>
        <p className="text-primaryFont text-2xl font-bold">
          {formatPersianNumber(totalPrice)} تومان
        </p>
        <Button>تکمیل خرید</Button>
      </div>
    </div>
  );
};

export default UserCartPage;
