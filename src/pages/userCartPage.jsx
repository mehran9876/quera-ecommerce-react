// import React, { useState } from "react";
import { Link } from "react-router";
import removeBtnIcon from "../assets/Vector.png";
import Button from "../components/general/button";
import { useGetProduct } from "../hooks/useGetProduct";
import { useCartStore } from "../stores/use-cart-store";
import formatPersianNumber from "../utils/persianNumberFormatter";

const UserCartPage = (props) => {
  const { cart: cartItems, changeQuantity, removeFromCart } = useCartStore();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mx-auto w-8/10">
      <ul>
        {cartItems.map((item) => (
          <UserCart
            id={item._id}
            quantity={item.quantity}
            onChange={changeQuantity}
            onDelete={removeFromCart}
          />
        ))}
      </ul>
      <div className="items-right font-iranYekan flex w-1/2 flex-col justify-center gap-2 pr-10 text-right">
        <p className="text-primaryFont text-xl">
          تعداد ({formatPersianNumber(totalItems)})
        </p>
        <p className="text-primaryFont text-2xl font-bold">
          {formatPersianNumber(1000000)} تومان
        </p>
        <Button>
          <Link to={"/user/progress"}>تکمیل خرید</Link>
        </Button>
      </div>
    </div>
  );
};

const UserCart = ({ id, quantity, onChange, onDelete }) => {
  console.log(id);
  const { data: item, isLoading, isError } = useGetProduct(id);

  if (isError) return <p>error</p>;
  if (isLoading) return <p>loading...</p>;
  // function formatPersianNumber(price: any): import("react").ReactNode {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <li key={item._id} className="m-4 flex">
      <div className="ml-4 h-[88px] w-[88px] overflow-hidden rounded-sm object-contain">
        <img src={item.image} alt={item.name} />
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
          value={quantity}
          onChange={(e) => onChange(id, +e.target.value)}
        >
          {Array.from({ length: item.countInStock }).map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onDelete(id)} type="button">
          <img src={removeBtnIcon} alt="removeBtnIcon" />
        </button>
      </div>
    </li>
  );
};

export default UserCartPage;
