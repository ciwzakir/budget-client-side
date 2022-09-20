import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import BillBody from "./BillDetails/BillBody";
import BillFooter from "./BillDetails/BillFooter";
import BillHeader from "./BillDetails/BillHeader";
import "./Single.css";

const SingleDetails = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle : 'Print Now',
    onAfterPrint: alert('Printed Successfully')

  });
  const { detailOfId } = useParams();
  const [expense, SetExpense] = useState({});

  useEffect(() => {
    fetch(`https://zenithciw.pythonanywhere.com/exp/${detailOfId}`)
      .then((res) => res.json())
      .then((data) => SetExpense(data));
  }, [detailOfId]);

  return (
    <div className="wholecomponent">
    
      <button onClick={handlePrint} className="ml-48">Print this out!</button>


      <div id="cont-bill" className="container mx-auto " ref={componentRef}  >
        <BillHeader expense={expense} key={expense.id}></BillHeader>
        <BillBody expense={expense} key={expense.id}></BillBody>
        <BillFooter expense={expense} key={expense.id}></BillFooter>
      </div>
    </div>
  );
};

export default SingleDetails;
