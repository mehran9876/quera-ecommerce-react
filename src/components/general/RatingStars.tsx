const RatingStars = ({ rate = 0 }) => {
  return (
    <div className="rating rating-xs rating-half">
      <div
        className="mask mask-star-2 mask-half-1 bg-current"
        aria-label="0.5 star"
        aria-current={rate > 0.5}
      />
      <div
        className="mask mask-star-2 mask-half-2 bg-current"
        aria-label="1 star"
        aria-current={rate >= 1}
      />
      <div
        className="mask mask-star-2 mask-half-1 bg-current"
        aria-label="1.5 star"
        aria-current={rate >= 1.5}
      />
      <div
        className="mask mask-star-2 mask-half-2 bg-current"
        aria-label="2 star"
        aria-current={rate >= 2}
      />
      <div
        className="mask mask-star-2 mask-half-1 bg-current"
        aria-label="2.5 star"
        aria-current={rate >= 2.5}
      />
      <div
        className="mask mask-star-2 mask-half-2 bg-current"
        aria-label="3 star"
        aria-current={rate >= 3}
      />
      <div
        className="mask mask-star-2 mask-half-1 bg-current"
        aria-label="3.5 star"
        aria-current={rate >= 3.5}
      />
      <div
        className="mask mask-star-2 mask-half-2 bg-current"
        aria-label="4 star"
        aria-current={rate >= 4}
      />
      <div
        className="mask mask-star-2 mask-half-1 bg-current"
        aria-label="4.5 star"
        aria-current={rate >= 4.5}
      />
      <div
        className="mask mask-star-2 mask-half-2 bg-current"
        aria-label="5 star"
        aria-current={rate >= 5}
      />
    </div>
  );
};

export default RatingStars;
