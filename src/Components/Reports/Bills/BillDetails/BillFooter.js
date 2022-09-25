import React from "react";
import { useContext } from "react";
import { BillContext } from "../SingleDetails";
import Singnatures from "./Signature/Singnatures";
const converter = require('taka-amount-to-word-js');
const BillFooter = () => {

const {get_paid_amount, created_by } = useContext(BillContext)

  return (
    <div className="px-7">
      <div className="text-left">
        <div className="certificate my-2">
          Certified that the above mentioned expenditure is reasonable and in
          favour of the country.
        </div>
        <div className="inwords my-5">
          Inwords : <span className="mx-1"> 
    
          {/* {converter(get_paid_amount?.toFixed)} */}
          </span>
        </div>
        <div className="my-2">
          <p>Prepared By : {created_by?.first_name}</p>
          <p>Checked By : {created_by?.last_name}</p>
        </div>
      </div>
      <div className="">
        <Singnatures ></Singnatures>
      </div>
    </div>
  );
};

export default BillFooter;
