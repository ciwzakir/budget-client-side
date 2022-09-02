import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import UseReviews from "../../../Hooks/UseReviews";

const MyReview = () => {
  const [reviews] = UseReviews();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const navigateToAddReview = () => {
    navigate("/addreview");
  };
 
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl text-center my-10">Customers Rattings</h1>
  <table className="table w-full">
         <thead>
           <tr>
             <th>Ser No</th>
             <th>Reviewed By</th>
             <th>Gives Ratings</th>
      
           </tr>
         </thead>
         <tbody>
           {reviews.map((review, index) => (
             <tr key={review._id}>
               <td>{index + 1}</td>
               <td>{review.name}</td>
               <td>{review.rating }</td>            
             </tr>
           ))}
         </tbody>
       </table>

       <button
        className="btn btn-info add-review-btn mt-10"
        onClick={navigateToAddReview}
      >
        Add a Review
      </button>
    </div>
  );
};

export default MyReview;
