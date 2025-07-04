import { useState } from "react";
import { Favorite } from "../../assets/icons";
import { useFavorites } from "../../stores/use-favorites-store";

interface FavoriteButtonI {
  _id: string;
  isFavorite?: boolean;
  className?: string;
}
const FavoriteButton = ({
  _id,
  isFavorite = false,
  className = "",
}: FavoriteButtonI) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const toggleFavorites = useFavorites((state) => state.toggleFavorites);
  const handleFavorites = () => {
    toggleFavorites(_id);
    setFavorite((prev) => !prev);
  };
  return (
    <button
      onClick={handleFavorites}
      className={`btn btn-ghost h-min w-min rounded-full border-0 p-1 hover:bg-transparent ${className}`}
    >
      <Favorite isFavorite={favorite} />
    </button>
  );
};

export default FavoriteButton;
