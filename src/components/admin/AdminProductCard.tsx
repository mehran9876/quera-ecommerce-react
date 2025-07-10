import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import type { ProductType } from "../../assets/testData";

interface Props {
  product: ProductType;
}

const AdminProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-[#f4f4f5] p-4 shadow-sm">
      {/* بخش متنی */}
      <div className="flex-1 text-right">
        <p className="mb-1 text-sm text-gray-500">{product.createdAt}</p>
        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mb-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[15px] font-semibold text-gray-900">
            {product.price.toLocaleString("fa-IR")} تومان
          </span>
          <Link
            to={`/admin/products/${product._id}`}
            className="flex items-center gap-2 rounded-md bg-pink-600 px-4 py-1.5 text-sm text-white hover:bg-pink-700"
          >
            مشاهده بیشتر
            <FaArrowLeft className="text-sm" />
          </Link>
        </div>
      </div>

      {/* تصویر محصول */}
      <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg border border-gray-300 bg-white p-1">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default AdminProductCard;
