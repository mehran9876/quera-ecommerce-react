import { useFavorites } from "../stores/use-favorites-store"; 
import { useGetProduct } from "../hooks/useGetProduct";
import ProductLayoutCompact from "../components/general/ProductLayoutCompact";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        هنوز محصولی به علاقه‌مندی‌ها اضافه نکردی.
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((id) => {
          const { data, isLoading, isError } = useGetProduct(id);

          if (isLoading) return <div key={id}>در حال بارگذاری...</div>;
          if (isError) return <div key={id}>خطا در دریافت محصول</div>;
          if (!data) return null;

          return (
            <ProductLayoutCompact
              key={data._id}
              productName={data.productName}
              size={data.size}
              image={data.image}
              price={data.price}
              _id={data._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;