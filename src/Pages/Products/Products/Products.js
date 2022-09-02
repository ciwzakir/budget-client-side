import React from "react";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../../Components/PageTitle/PageTitle";
import UseProducts from "../../../Hooks/UseProducts";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products] = UseProducts();

  return (
    <div className="container mx-auto ">
      <PageTitle title="products-"></PageTitle>
      <h1 className="text-center text-5xl my-10">
        Our Manufactured Parts of Camera (03)
      </h1>
      <div className="grid gap-x-3 gap-y-3 md:grid-cols-3 sm:grid-cols-1">
        {products?.slice(0, 3)?.map((product) => (
          <SingleProduct product={product} key={product.id}></SingleProduct>
        ))}
      </div>
     
    </div>
  );
};

export default Products;
