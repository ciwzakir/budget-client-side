import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf'
import { useParams } from "react-router-dom";
import BillBody from './BillDetails/BillBody';
import BillFooter from './BillDetails/BillFooter';
import BillHeader from './BillDetails/BillHeader';
import './Single.css'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const SingleDetails = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    const { detailOfId } = useParams();
    const [expense, SetExpense] = useState({});
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/exp/${detailOfId}`)
        .then((res) => res.json())
        .then((data) => SetExpense(data));
    }, [detailOfId]);
    return (
     <div className="wholecomponent" >
    <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
         <div id='cont-bill' className='container mx-auto ' >
          <button class="btn btn-outline">Download PDF</button>
          <BillHeader expense={expense} key={expense.id}></BillHeader>
          <BillBody expense={expense} key={expense.id}></BillBody>
          <BillFooter expense={expense} key={expense.id}></BillFooter>
        </div>
     </div>
    );
};

export default SingleDetails;