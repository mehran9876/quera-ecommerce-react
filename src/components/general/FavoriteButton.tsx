import { Favorite } from "../../assets/icons";
import { useAuthStore } from "../../stores/use-auth-store";
import { useFavorites } from "../../stores/use-favorites-store";

interface FavoriteButtonI {
  _id: string;

  className?: string;
}
const FavoriteButton = ({ _id, className = "" }: FavoriteButtonI) => {
  const toggleFavorites = useFavorites((state) => state.toggleFavorites);
  const favorites = useFavorites((state) => state.favorites);
  const favorite = favorites.includes(_id);
  const { userId } = useAuthStore();
  const handleFavorites = () => {
    toggleFavorites(_id);
  };
  return (
    <button
      onClick={handleFavorites}
      disabled={!userId}
      className={`btn btn-ghost h-min w-min rounded-full border-0 p-1 hover:bg-transparent ${className} ${!userId ? "cursor-not-allowed" : ""}`}
    >
      <Favorite isFavorite={favorite} />
    </button>
  );
};

export default FavoriteButton;
