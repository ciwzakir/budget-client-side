import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center text-3xl">
      <h1 className="text-red-700"> Ops! Nothing Found</h1>
      <p className="text-red-700text-red-700">
        The page you are looking for is not available now
      </p>
    </div>
  );
};

export default NotFound;
