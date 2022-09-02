import React from "react";

const SingleReview = ({review}) => {
  const { name, picture, rating,comment} = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Reviews Images" className="h-48 w-48 rounded-full align-middle border-none"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title p-2">Name :<span className="text-2xl">{name}</span></h2>
        <p className="text-left p-1">Gives Rating :{rating}</p>
        <p className="text-left text-3xl">Description</p>
        <textarea className="text-left h-[7rem] p-1" >{comment}</textarea>
         </div>
    </div>
  );
};

export default SingleReview;
