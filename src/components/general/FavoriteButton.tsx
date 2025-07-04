import { useState } from "react";
import { Favorite } from "../../assets/icons";

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
  const handleFavorites = () => {
    console.log(`_id: ${_id} favorite: ${favorite}`);
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
