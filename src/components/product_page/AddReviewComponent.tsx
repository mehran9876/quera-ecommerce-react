import React from "react";
import Button from "../general/button";
import { useCreateReview } from "../../hooks/useCreateReview";
import { useParams } from "react-router";

const AddReviewComponent = () => {
  const [userRate, setUserRate] = React.useState(1);
  const [userReview, setUserReview] = React.useState("");
  const { productId } = useParams();
  const { mutate, isPending, isError } = useCreateReview(productId!);

  const handleCreateReview = () => {
    if (!userReview) return console.log("error");

    if (isPending) return console.log("loading");
    if (isError) return console.log("error");

    mutate(
      {
        rating: userRate,
        review: userReview,
      },
      {
        onSuccess: () => {
          setUserRate(1);
          setUserReview("");
        },
      },
    );
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateReview();
      }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor=" review-rate">امتیاز</label>
        <select
          className="select w-full"
          name="review-rate"
          id="review-rate"
          value={userRate}
          onChange={(e) => setUserRate(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="review">نظر</label>
        <textarea
          className="textarea w-full"
          name="review"
          id="review"
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
        ></textarea>
      </div>
      <Button type="submit">ثبت نظر</Button>
    </form>
  );
};

export default AddReviewComponent;
