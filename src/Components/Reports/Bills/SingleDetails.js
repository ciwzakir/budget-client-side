import React, { useEffect, useRef, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import BillBody from "./BillDetails/BillBody";
import BillFooter from "./BillDetails/BillFooter";
import BillHeader from "./BillDetails/BillHeader";
import "./Single.css";
export const BillContext = createContext("bill context");

const SingleDetails = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Now",
    // onAfterPrint: alert('Printed Successfully')
  });
  const { detailOfId } = useParams();
  const [expense, SetExpense] = useState({});

  useEffect(() => {
    fetch(`https://zenithciw.pythonanywhere.com/exp/${detailOfId}`)
      .then((res) => res.json())
      .then((data) => SetExpense(data));
  }, [detailOfId]);

  return (
    <BillContext.Provider value={expense}>
      <div className="wholecomponent">
        <button onClick={handlePrint} className="ml-96 btn btn-outline">
          Print this out!
        </button>
        <div id="cont-bill" className="container mx-auto " ref={componentRef}>
          <BillHeader></BillHeader>
          <BillBody></BillBody>
          <BillFooter></BillFooter>
        </div>
      </div>
    </BillContext.Provider>
  );
};

export default SingleDetails;
