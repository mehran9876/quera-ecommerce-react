import React from 'react';
import { ProductType } from "../../types/productType";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

interface Props {
  product: ProductType;
}

const AdminProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-[#f4f4f5] rounded-lg p-4 flex justify-between items-center gap-4 shadow-sm border border-gray-200">
      {/* بخش متنی */}
      <div className="flex-1 text-right">
        <p className="text-sm text-gray-500 mb-1">{product.createdAt}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-[15px] font-semibold text-gray-900">
            {product.price.toLocaleString('fa-IR')} تومان
          </span>
          <Link
            to={`/admin/products/${product._id}`}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 text-sm rounded-md"
          >
            مشاهده بیشتر
            <FaArrowLeft className="text-sm" />
          </Link>
        </div>
      </div>

      {/* تصویر محصول */}
      <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border border-gray-300 bg-white p-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AdminProductCard;
