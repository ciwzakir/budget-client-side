import React, { useEffect, useState, } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import PaginateSupplier from "./PaginateSupplier";
import ReduceSupplier from "./ReduceSupplier";



const SumSuppliers = () => {
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());

  let startdateis = <p>Please select your start date</p>;
  let enddateis = <p>Please pick a day.</p>;

  if (startdate) {
    startdateis = (
      <p className="text-1xl py-10">
        You selected
        <span className="text-info text-2xl px-3">
          {format(startdate, "PP")}
        </span>
        .
      </p>
    );
  }

  if (enddate) {
    enddateis = (
      <p className="text-1xl py-10">
        You selected
        <span className="text-info text-2xl px-3">{format(enddate, "PP")}</span>
      </p>
    );
  }

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(
      `https://zenithciw.pythonanywhere.com/codes/?is_cheque=true&updated_at__gte=${format(
        startdate,
        "MM/dd/yyyy"
      )}&updated_at__lte=${format(enddate, "MM/dd/yyyy")}`
    )
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [startdate, enddate]);

  return (
    <div className="main-container">
        <section className="mt-100">
        <div className="hero min-h-full bg-base-200 py-32 my-24">
          <div className="hero-content flex-col lg:flex-row">
            <div className="ml-11">
              <h2 className="text-5xl font-bold">
                Suppliers'
                <span className="text-green-800"> Information </span>
              </h2>
              <p className="py-12 text-1xl">
               Here we will able to find the desired information about suppliers.   Here we will able to find the desired information about suppliers.   Here we will able to find the desired information about suppliers.  
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-48 pt-10">
        <div className="hero min-h-full bg-base-200 pt-10 ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center mr-12 ">
              <h2 className="text-center text-xl"> Start Date</h2>
              <DayPicker
                mode="single"
                selected={startdate}
                onSelect={setStartdate}
                footer={startdateis}
              />
            </div>
            <div>
              <h1 className="text-center">End Date</h1>
              <DayPicker
                mode="single"
                selected={enddate}
                onSelect={setEnddate}
                footer={enddateis}
              />
            </div>
          </div>
        </div>
      </section>
      <section><PaginateSupplier expenses={expenses}></PaginateSupplier></section>
      <section> <ReduceSupplier expenses={expenses}> </ReduceSupplier></section>  
  
    

      
    </div>
  );
};

export default SumSuppliers;
