import React from "react";
import "./Account.css";
import Accountant from "./Accountant";
import Countersign from "./Countersign";
import PaymentMethod from "./PaymentMethod";

const Singnatures = () => {

  return (
    <div className="flex flex-row text-left ">
      <Accountant ></Accountant>
      <Countersign ></Countersign>
      <PaymentMethod> </PaymentMethod>
    </div>
  );
};

export default Singnatures;
