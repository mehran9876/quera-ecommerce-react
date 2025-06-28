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
          <li key={item.id} className="flex m-4">
            <div className="ml-4 rounded-sm w-[88px] h-[88px] object-contain overflow-hidden">
              {item.image}
            </div>
            <div className="flex flex-col gap-2 w-7/10 font-iranYekan text-base text-right align-middle">
              <p className="text-primaryPink">{item.name}</p>
              <p className="text-primaryFont">{item.brand}</p>
              <p className="font-bold text-primaryFont">
                {formatPersianNumber(item.price)}
                <span className="pr-2">تومان</span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <select
                className="p-1 border-select rounded-sm w-20"
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
      <div className="flex flex-col justify-center items-right gap-2 pr-10 w-1/2 font-iranYekan text-right">
        <p className="text-primaryFont text-xl">
          تعداد ({formatPersianNumber(totalItems)})
        </p>
        <p className="font-bold text-primaryFont text-2xl">
          {formatPersianNumber(totalPrice)} تومان
        </p>
        <Button>تکمیل خرید</Button>
      </div>
    </div>
  );
};

export default UserCartPage;
