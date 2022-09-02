import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BillBody from "./BillDetails/BillBody";
import BillFooter from "./BillDetails/BillFooter";
import BillHeader from "./BillDetails/BillHeader";
import "./Single.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const SingleDetails = () => {

  const { detailOfId } = useParams();
  const [expense, SetExpense] = useState({});
  useEffect(() => {
    fetch(`https://zenithciw.pythonanywhere.com/exp/${detailOfId}`)
      .then((res) => res.json())
      .then((data) => SetExpense(data));
  }, [detailOfId]);
  return (
    <div className="wholecomponent">
   
    
      <div id="cont-bill" className="container mx-auto ">
        <button class="btn btn-outline">Download PDF</button>
        <BillHeader expense={expense} key={expense.id}></BillHeader>
        <BillBody expense={expense} key={expense.id}></BillBody>
        <BillFooter expense={expense} key={expense.id}></BillFooter>
      </div>
    </div>
  );
};

export default SingleDetails;
