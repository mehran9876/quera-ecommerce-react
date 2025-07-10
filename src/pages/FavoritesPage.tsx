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
    <div className="flex flex-col gap-6 p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {favorites.map((id) => (
          <FavoriteItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

const FavoriteItem = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetProduct(id);

  if (isLoading) return <div key={id}>در حال بارگذاری...</div>;
  if (isError) return <div key={id}>خطا در دریافت محصول</div>;
  if (!data) return <div>خالی</div>;

  return <ProductLayoutCompact product={data} size={"small"} />;
};

export default FavoritesPage;
