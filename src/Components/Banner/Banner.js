import React from "react";
import "./Banner.css";
import bannerImage from "../../Assets/Images/Slider/tripod.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} alt="banner" className="bannerImg" />
        <div>
          <h1 className="text-4xl font-bold">Welcome to Eagle Camera House</h1>
          <p className="py-6">
            Eagle Camera House is famous manufacturing company of different
            parts of Camera. If you interest to prepare any parts of Camera,
            feel free to contact us. Our customer service is open for 24/7
          </p>
          <button className="btn btn-info">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
