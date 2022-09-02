import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const url = `https://secret-mesa-56031.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.alert("Successfully added a product");
        console.log(result);
        navigate("/");
      });
  };
  return (
    <div className="w-full text-end container mx-auto">
      <h2 className="text-5xl text-center my-10 ">ADD A PRODUCT </h2>
      <div className="title-underline bg-primary mx-auto"></div>
      <div className="product-container">
        <form
          className="flex flex-col w-96 mx-auto "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-start">Manufactured Parts Name</label>
          <input
            className="mb-3"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <label className="text-start">Picture</label>
          <input
            className="mb-3"
            placeholder="Image Url"
            type="text"
            {...register("image")}
          />
          <label className="text-start"> Short Description</label>
          <input
            className="mb-3"
            placeholder="Descriptions"
            type="text"
            {...register("desc")}
          />
          <label className="text-start"> Unit price</label>
          <input
            className="mb-3"
            placeholder="Customer's Comments"
            type="number"
            {...register("price")}
          />
          <label className="text-start">Available Quantity</label>
          <input
            className="mb-3"
            placeholder="Available Quantity"
            type="number"
            {...register("AvailAbleQuantity")}
          />
          <label className="text-start">Minimum Order Quantity</label>
          <input
            className="mb-3"
            placeholder="Minimum Order Qty"
            type="number"
            {...register("minOrder")}
          />
          <input
            className="btn btn-info add-review-btn W-48"
            type="submit"
            value="ADD A PRODUCT"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
