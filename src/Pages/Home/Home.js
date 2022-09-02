import React from "react";
import Banner from "../../Components/Banner/Banner";
import PageTitle from "../../Components/PageTitle/PageTitle";
import "./Home.css";
import Products from "../Products/Products/Products";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Reviews from "./Reviews/Reviews";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div>
      <PageTitle title="Home-"></PageTitle>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Contact></Contact>
     </div>
  );
};

export default Home;
