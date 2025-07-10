import { Link } from "react-router";
import FavoriteButton from "./FavoriteButton";
import Badge from "./Badge";
import persianNumberFormatter from "../../utils/persianNumberFormatter";

const ProductLayoutCompact = (props) => {
  const cardSizeClass =
    props.size === "large"
      ? "w-[404px] h-[386px]"
      : props.size === "small"
        ? "w-[350px] h-[336px]"
        : "w-[350px] h-[336px]";

  const nameFontClass = props.size === "large" ? "text-lg" : "text-base";

  return (
    <div
      id="productCardContainer"
      className={`relative flex flex-col justify-between rounded-lg ${cardSizeClass}`}
    >
      <FavoriteButton
        _id={props.product._id}
        className="absolute top-3 right-3"
      />
      <div
        id="productImage"
        className="bg-productLayout h-7.5/10 flex flex-1 items-center justify-center overflow-hidden rounded-lg"
      >
        <Link to={`/product/${props.product._id}`}>
          {(props.product.image && (
            <img
              src={props.product.image}
              alt={props.product.name}
              className="h-full w-full rounded-lg object-cover"
            />
          )) || <div className="h-full w-full" />}
        </Link>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span
          id="productName"
          className={`text-primaryFont truncate ${nameFontClass}`}
        >
          {props.product.name}
        </span>
        <Badge
          text={`${persianNumberFormatter(props.product.price)} تومان`}
          className="!text-sm"
        />
      </div>
    </div>
  );
};
export default ProductLayoutCompact;
