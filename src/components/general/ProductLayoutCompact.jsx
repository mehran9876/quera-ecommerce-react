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
      className={`flex flex-col justify-between rounded-lg ${cardSizeClass}`}
    >
      <div
        id="productImage"
        className="flex flex-1 justify-center items-center bg-productLayout rounded-lg h-7.5/10 overflow-hidden"
      >
        {(props.image && (
          <img
            src={props.image}
            alt={props.productName}
            className="rounded-lg w-full h-full object-contain"
          />
        )) || <div className="w-full h-full" />}
      </div>
      <div className="flex justify-between items-center mt-2">
        <span
          id="productName"
          className={`text-primaryFont truncate ${nameFontClass}`}
        >
          {props.productName}
        </span>
        <span id="badge"></span>
      </div>
    </div>
  );
};
export default ProductLayoutCompact;
