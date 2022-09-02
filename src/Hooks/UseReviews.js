import React, { useEffect, useState } from "react";

const UseReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://secret-mesa-56031.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};

export default UseReviews;
