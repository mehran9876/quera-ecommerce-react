import React, { useState } from "react";
import ProductLayoutCompact from "../components/general/ProductLayoutCompact";
import Button from "../components/general/button";
import Badge from "../components/general/Badge"
import { Favorite } from "../assets/icons"
import UserProductPage from "./UserProductPage";
const relatedProducts = [
  { id: 1, productName: "Apple iPad Pro 12.9-inch", size: "small" },
  { id: 2, productName: "Apple iPad Pro 12.9-inch", size: "small" },
  { id: 3, productName: "Apple iPad Pro 12.9-inch", size: "small" },
  { id: 4, productName: "Apple iPad Pro 12.9-inch", size: "small" },
  { id: 5, productName: "Apple iPad Pro 12.9-inch", size: "small" },
  { id: 6, productName: "Apple iPad Pro 12.9-inch", size: "small" },
];


const UserProductRelated = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
 
  return (
    <div className=" p-6 flex flex-col">
        <UserProductPage/>
     <div className="flex flex-col gap-4 justify-end">
      <div className="grid grid-cols-3 gap-x-4 w-fit">
        {relatedProducts.slice(0, 3).map((product) => (
          <div key={product.id} className="relative">
             <div className="absolute top-2 right-2 z-10 cursor-pointer"
               onClick={() => toggleFavorite(product.id)}>
                <Favorite className={` ${
                    favorites.includes(product.id) ? "text-red-500 fill-red-500" : "text-gray-400"
               }`}/>
              </div>
            <ProductLayoutCompact
            productName={product.productName}
            size={product.size}
            image={product.image}
             />
            <div className="absolute bottom-[-7px] left-[-35px] scale-[0.6]">
                <Badge text={`${product.price} تومان`}/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        {relatedProducts[4] && (
          <div className="relative w-full max-w-sm">
            <div
              className="absolute top-2 right-2 z-10 cursor-pointer"
              onClick={() => toggleFavorite(relatedProducts[4].id)}
            >
              <Favorite
                className={`w-5 h-5 ${
                  favorites.includes(relatedProducts[4].id)? "text-red-500 fill-red-500" : "text-gray-400"
                }`}
              />
            </div>

            <ProductLayoutCompact
              productName={relatedProducts[4].productName}
              size={relatedProducts[4].size}
              image={relatedProducts[4].image}
            />

            <div className="absolute bottom-[-7px] left-0 scale-[0.6]">
              <Badge text={`${relatedProducts[4].price} تومان`} />
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default UserProductRelated;