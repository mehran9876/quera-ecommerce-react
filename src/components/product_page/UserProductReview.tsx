import type { ReviewType } from "../../types/reviewType";
import persianDateFormatter from "../../utils/persianDateFormatter";
import RatingStars from "../general/RatingStars";

const UserProductReview = ({ review }: { review: ReviewType }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="bg-bgDarkGray rounded-lg p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-placeholder text-sm">{review.name}</span>
          <span className="text-placeholder text-xs">
            {persianDateFormatter(review.createdAt)}
          </span>
        </div>
        <p className="mb-6 text-sm">{review.comment}</p>
        <RatingStars rate={review.rating} />
      </div>
    </div>
  );
};

export default UserProductReview;
