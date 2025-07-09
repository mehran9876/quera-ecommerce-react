import React from "react";
import Button from "../general/button";
import { useCreateReview } from "../../hooks/useCreateReview";
import { Link, useParams } from "react-router";

const AddReviewComponent = () => {
  // !NOTE: dummy data replace with real user _id later
  const _id = "adcunada";

  const [userRate, setUserRate] = React.useState(1);
  const [userReview, setUserReview] = React.useState("");
  const { productId } = useParams();
  const { mutate, isPending, isError } = useCreateReview(productId!);

  const handleCreateReview = () => {
    if (!userReview) return console.error("error");

    if (isPending) return console.log("loading");
    if (isError) return console.error("error");

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

  if (!_id)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <p>ابتدا باید وارد حساب خود شوید</p>
        <div className="flex gap-3">
          <Link className="btn bg-primaryPink" to="/login">
            ورود
          </Link>
          <Link className="btn bg-primaryPink" to="/register">
            ثبت نام
          </Link>
        </div>
      </div>
    );

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateReview();
      }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="review-rate">امتیاز</label>
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
