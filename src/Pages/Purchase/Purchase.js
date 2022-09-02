import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.init";
import { useNavigate, useParams } from "react-router-dom";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const orderEmail = user.email;
  const { register, handleSubmit } = useForm();
  const { productId } = useParams();
  const [product, SetProduct] = useState({});
  const minQty = parseInt(product.minOrder);
  const maxQty = parseInt(product.AvailAbleQuantity);
  const unitPrice = parseInt(product.price);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://secret-mesa-56031.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => SetProduct(data));
  }, [productId]);

  const onSubmit = (data) => {
    const confirmedMessage = window.confirm(
      "Are you sure to order this product"
    );
    if (confirmedMessage) {
      const url = `https://secret-mesa-56031.herokuapp.com/orders`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
          window.alert("Successfully added a purchase order");
          navigate("/orders");
        });
    }
  };
  return (
    <div className="container mx-auto w-3/4 ">
      <h2 className="text-4xl text-center pb-10">Place Order</h2>
      <div className="order-container">
        <form
          className="flex flex-col w-96 mx-auto "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-start">Manufactured Parts Name</label>
          <input
            className="mb-3"
            placeholder="Name"
            value={product.name}
            {...register("name", { required: true })}
          />
          <label className="text-start"> Unit price</label>
          <input
            className="mb-3"
            placeholder="Product"
            name="price"
            type="number"
            readOnly
            value={unitPrice}
            {...register("price", { required: true })}
          />

          <label className="text-start">
            {" "}
            Place Order between {minQty} and {maxQty}
          </label>
          <input
            type="number"
            required
            {...register("quantity", {
              min: minQty,
              max: maxQty,
            })}
          />

          <input
            className="btn btn-info add-review-btn W-48"
            type="submit"
            value="Place An Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
