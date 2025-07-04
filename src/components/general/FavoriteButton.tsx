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
  const handleAddFavorites = () => {
    console.log(`Add ${_id} to favorites`);
  };
  return (
    <button
      onClick={handleAddFavorites}
      className={`btn btn-ghost h-min w-min rounded-full ${className}`}
    >
      <Favorite isFavorite={isFavorite} />
    </button>
  );
};

export default FavoriteButton;
