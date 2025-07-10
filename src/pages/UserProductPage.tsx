import { useState } from "react";
import { useCartStore } from "../stores/use-cart-store";
import Button from "../components/general/button";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import FavoriteButton from "../components/general/FavoriteButton";
import persianNumberFormatter from "../utils/persianNumberFormatter";
import {
  BoxIcon,
  CartFullIcon,
  ClockIcon,
  ShopFullIcon,
  StarIcon,
} from "../assets/icons";
import RatingStars from "../components/general/RatingStars";
import { useGetCategory } from "../hooks/useGetCategory";

const UserProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  // react router loader
  const productObj = useLoaderData();

  const productPrice = Intl.NumberFormat("fa-IR").format(productObj.price);

  const lastUpdateDayAgo =
    (Date.now() - Date.parse(productObj.updatedAt)) / 86400000;
  let lastUpdatedText = "";
  if (lastUpdateDayAgo < 1) {
    lastUpdatedText = "امروز";
  } else if (lastUpdateDayAgo < 2) {
    lastUpdatedText = "دیروز";
  } else if (lastUpdateDayAgo < 7) {
    lastUpdatedText = `${persianNumberFormatter(Math.floor(lastUpdateDayAgo))} روز پیش`;
  } else {
    lastUpdatedText = `${persianNumberFormatter(Math.floor(lastUpdateDayAgo))} هفته پیش`;
  }

  return (
    <section className="relative mt-24 mr-13">
      <div className="mb-16 grid max-w-4/5 grid-cols-10 gap-29">
        <FavoriteButton
          _id={productObj._id}
          className="absolute top-2 left-20"
        />
        <div className="col-span-5 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white p-12">
          <img
            className="object-fill"
            src={productObj.image}
            alt={productObj.name}
          />
        </div>
        <div className="col-span-5 flex flex-col justify-between">
          <h1 className="text-2xl font-medium">{productObj.name}</h1>
          <p>{productObj.description}</p>
          <p className="text-5xl font-medium">{productPrice} تومان</p>

          <div className="grid grid-cols-2 gap-y-6">
            <p className="flex items-center gap-2">
              <StarIcon />
              <span className="text-placeholder">امتیاز:</span>
              <span>
                {persianNumberFormatter(productObj.rating.toFixed(1))}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <ShopFullIcon />
              <span className="text-placeholder">برند:</span>
              {/* NOTE: needs to be replaced with brand name after api call */}
              <span>{useGetCategory(productObj.category).data?.name}</span>
            </p>
            <p className="flex items-center gap-2">
              <CartFullIcon />
              <span className="text-placeholder">تعداد:</span>
              <span>{persianNumberFormatter(productObj.countInStock)}</span>
            </p>
            <p className="font-iranYekan flex items-center gap-2">
              <ClockIcon />
              <span className="text-placeholder">زمان بروز رسانی:</span>
              <span>{lastUpdatedText}</span>
            </p>
            <p className="flex items-center gap-2">
              <BoxIcon />
              <span className="text-placeholder">موجودی:</span>
              <span>{persianNumberFormatter(productObj.countInStock)}</span>
            </p>
            <p className="flex items-center gap-2">
              <StarIcon />
              <span className="text-placeholder">نظرات:</span>
              <span>{persianNumberFormatter(productObj.reviews?.length)}</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>
                {persianNumberFormatter(productObj.reviews?.length)} نظر
              </span>
              <RatingStars rate={productObj.rating} />
            </div>
            <label className="hidden" htmlFor="quantity">
              quantity
            </label>
            <select
              className="bg-bgInput border-inputBorder flex min-w-24 rounded-lg border p-1 pl-3"
              dir="ltr"
              name="quantity"
              id="quantity"
              disabled={productObj.countInStock === 0}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: productObj.countInStock }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="w-max cursor-pointer justify-self-end">
            <Button
              disabled={productObj.countInStock === 0}
              onClick={() =>
                addToCart(productObj._id, productObj.name, quantity)
              }
            >
              افزودن به سبد
            </Button>
          </div>
        </div>
      </div>

      <div className="mr-47 grid w-5/7 grid-cols-10">
        <div className="col-span-2">
          <ul className="menu gap-6">
            <li>
              <NavLink
                to={"."}
                end
                className={({ isActive }) =>
                  `${isActive ? "text-primaryPink" : ""}`
                }
              >
                ثبت نظر
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"comments"}
                className={({ isActive }) =>
                  `${isActive ? "text-primaryPink" : ""}`
                }
              >
                مشاهده نظرات
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"related"}
                className={({ isActive }) =>
                  `${isActive ? "text-primaryPink" : ""}`
                }
              >
                محصولات مرتبط
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-8 mr-20">
          <Outlet context={productObj.reviews} />
        </div>
      </div>
    </section>
  );
};

export default UserProductPage;
