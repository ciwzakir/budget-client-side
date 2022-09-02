import React from "react";
import UseReviews from "../../../Hooks/UseReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews] = UseReviews();
  return (
    <div className="container mx-auto px-4 text-center my-24">
      <h1 className="text-7xl ">Recent Customer Reviews(3)</h1>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1 my-24">
        {reviews?.slice(0, 3)?.map((review) => (
          <SingleReview review={review} key={review.id}></SingleReview>
        ))}
      </div>  
    </div>
  );
};

export default Reviews;
