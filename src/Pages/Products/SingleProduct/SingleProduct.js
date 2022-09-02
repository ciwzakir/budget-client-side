import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({product}) => {
  const {_id, name, image, desc, price, AvailAbleQuantity, minOrder } = product;
  const navigate = useNavigate();

  const navigateToPurchase = (id) => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Images"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Parts Name:{name}</h2>
        <p>Available Quantity: {AvailAbleQuantity} </p>
        <p> Minimum Order: {minOrder} </p>
        <p>Unit Price: {price} </p>
        <p className="pb-10">{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-info" onClick={() => navigateToPurchase(_id)}>Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
