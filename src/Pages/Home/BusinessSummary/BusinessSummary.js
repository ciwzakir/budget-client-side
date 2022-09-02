import React from "react";
import "./BusinessSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCameraRetro,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="container mx-auto  text-center my-24 gap-4">
      <h1 className="text-center text-7xl my-10"> Business Summary</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow gap-24">
        <div className="stat text-center">
          <div className="icons text-info">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="stat-title ">Our Happy Clients</div>
          <div className="stat-value">31K+</div>
        </div>

        <div className="stat text-center">
          <div className="icons text-info">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="stat-title">National Awards</div>
          <div className="stat-value">15+</div>
        </div>

        <div className="stat text-center">
          <div className="icons text-info">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="stat-title">Positive Reviews</div>
          <div className="stat-value">433K+ </div>
        </div>
        <div className="stat text-center">
          <div className="icons text-info">
            <FontAwesomeIcon icon={faCameraRetro} />
          </div>
          <div className="stat-title">Our Products</div>
          <div className="stat-value">1000+ </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
