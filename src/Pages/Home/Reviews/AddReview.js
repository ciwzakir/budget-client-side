import React from "react";
import "./AddReview.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const url = `https://secret-mesa-56031.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.alert("Successfully added a review");
        console.log(result);
        navigate("/reviews");
      });
  };
  return (
    <div className="w-full text-end container mx-auto">
      <h2 className="text-5xl text-center my-10 ">ADD A REVIEW </h2>
      <div className="title-underline bg-primary mx-auto"></div>
      <div className="review-container">
        <form
          className="flex flex-col w-96 mx-auto "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-start">Name</label>
          <input
            className="mb-3"
            placeholder="Name"
            autoComplete="off"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <label className="text-start">Picture</label>
          <input
            className="mb-3"
            placeholder="Image Url"
            type="text"
            {...register("picture")}
          />
          <label className="text-start">Ratings 1 to 5</label>
          <input
            className="mb-3"
            autoComplete="off"
            placeholder="Customer's Ratings like 4.8"
            type="text"
            {...register("rating")}
          />
          <label className="text-start">Description</label>
          <input
            className="mb-3"
            placeholder="Customer's Comments"
            type="textarea"
            {...register("comment")}
          />
          <input
            className="btn btn-info add-review-btn"
            type="submit"
            value="Add A Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
