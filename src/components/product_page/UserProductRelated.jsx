import ProductLayoutCompact from "../general/ProductLayoutCompact";

import { product } from "../../assets/testData";

const relatedProducts = [product, product, product, product];

const UserProductRelated = () => {
  // const [favorites, setFavorites] = useState([]);

  // const toggleFavorite = (productId) => {
  //   setFavorites((prev) =>
  //     prev.includes(productId)
  //       ? prev.filter((id) => id !== productId)
  //       : [...prev, productId],
  //   );
  // };

  return (
    <div className="flex flex-col justify-end gap-4">
      <div className="grid w-fit grid-cols-3 gap-x-4">
        {relatedProducts.slice(0, 3).map((product) => (
          <div key={product._id} className="relative">
            <ProductLayoutCompact size={"small"} product={product} />
          </div>
        ))}
      </div>
      <div className="flex">
        {relatedProducts[4] && (
          <div className="relative w-full max-w-sm">
            <ProductLayoutCompact size={"small"} product={relatedProducts[4]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProductRelated;
