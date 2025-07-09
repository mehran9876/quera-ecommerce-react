import { useOutletContext } from "react-router";
import type { ReviewType } from "../../types/reviewType";
import UserProductReview from "./UserProductReview";

const UserProductReviews = () => {
  const reviews: ReviewType[] = useOutletContext();
  console.log(reviews);
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review: ReviewType) => (
        <UserProductReview key={review._id} review={review} />
      ))}
    </div>
  );
};

export default UserProductReviews;
