import React, { useEffect } from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import {
  BoxIcon,
  CartFullIcon,
  ClockIcon,
  ShopFullIcon,
  StarIcon,
} from "../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = ({ products }) => {
  useEffect(() => {}, []);

  return (
    <div className="relative w-full max-w-[600px]">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="w-full max-w-[600px]"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="flex flex-col">
            <div className="rounded-2xl text-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-96 w-full rounded-xl"
              />
            </div>
            <div className="flex items-start gap-10">
              <div className="mt-3 flex w-2/3 flex-col justify-between gap-4 text-right">
                <span className="text-right">{product.title}</span>
                <span className="text-left font-bold">
                  {product.price} تومان
                </span>
                <p className="font-iranYekan text-[14px]">
                  {product.description}
                </p>
              </div>

              <div className="mt-3 grid w-1/2 grid-cols-2 gap-x-2 gap-y-3">
                <p className="flex items-center gap-2">
                  <StarIcon />
                  <span className="text-placeholder">امتیاز:</span>
                  <span>{product.rating}</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShopFullIcon />
                  <span className="text-placeholder">برند:</span>
                  <span>{product.brand}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CartFullIcon />
                  <span className="text-placeholder">تعداد:</span>
                  <span>{product.count}</span>
                </p>
                <p className="flex items-center gap-2">
                  <ClockIcon />
                  <span className="text-placeholder">زمان بروز رسانی:</span>
                  <span>{product.lastUpdate}</span>
                </p>
                <p className="flex items-center gap-2">
                  <BoxIcon />
                  <span className="text-placeholder">موجودی:</span>
                  <span>{product.stock}</span>
                </p>
                <p className="flex items-center gap-2">
                  <StarIcon />
                  <span className="text-placeholder">نظرات:</span>
                  <span>{product.comments}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-prev absolute top-1/2 right-[-28px] z-10 -translate-y-1/2 cursor-pointer">
        <img src={arrowRight} alt="prev" className="h-6 w-6" />
      </div>

      <div className="custom-swiper-next absolute top-1/2 left-[-28px] z-10 -translate-y-1/2 cursor-pointer">
        <img src={arrowLeft} alt="next" className="h-6 w-6" />
      </div>
    </div>
  );
};

export default ProductSlider;
