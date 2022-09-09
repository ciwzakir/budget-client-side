import React, { useEffect, useState, } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import "./Exp.css";

const UseExp = () => {
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());



  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(
      `https://zenithciw.pythonanywhere.com/codes/?updated_at__gte=${format(
        startdate,
        "MM/dd/yyyy"
      )}&updated_at__lte=${format(enddate, "MM/dd/yyyy")}`
    )
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [startdate, enddate]);

return [expenses, setExpenses];
};

export default UseExp;

