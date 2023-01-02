import React, { useEffect, useRef, useState } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import ReactPaginate from "react-paginate";
import { useReactToPrint } from "react-to-print";

const AckAllotment = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Now",
  });
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

  const [allotments, setAllotments] = useState([]);

  useEffect(() => {
    fetch(
      `https://zenithciw.pythonanywhere.com/allotments/?alloted_on__gte=${format(
        startdate,
        "MM/dd/yyyy"
      )}&alloted_on__lte=${format(enddate, "MM/dd/yyyy")}&ordering=id`
    )
      .then((res) => res.json())
      .then((data) => setAllotments(data));
  }, [startdate, enddate]);

  const [currentallotments, setCurrentallotments] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentallotments(allotments.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allotments.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allotments]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allotments.length;
    setItemOffset(newOffset);
  };

  // const numAscendingData = [...currentallotments].sort((a, b) =>
  //   a.item_supplier?.name > b.item_supplier?.name ? 1 : -1
  // );

  return (
    <div className="main-container">
      <section>
        <div className="hero min-h-full bg-base-200 py-32 my-24">
          <div className="hero-content flex-col lg:flex-row">
            <ul className="steps">
              <li className="step step-primary"> From Date</li>
              <li className="step step-primary"> To Date</li>
              <li className="step step-primary"> Results Bellow</li>
            </ul>
            <div className="ml-11">
              <h2 className="text-5xl font-bold">
                Acknowledge of
                <span className="text-green-800 mx-2">Approved</span>
                allotments
              </h2>
              <p className="py-6">
                First select from date and To date asper your requirements. Then
                you will see here an automated reports of refunds in this
                period. And you may acknowledge the following reference letters.
              </p>
              <button className="btn btn-primary"> See Bellow</button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-48">
        <div className="hero min-h-full bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center mr-12">
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

      <section className="my-48 text-left">
        <div className="print">
          <button onClick={handlePrint} className="ml-24 btn btn-outline">
            Print this out!
          </button>
        </div>
        <div className="overflow-x-auto  mx-24 w-full pr-36 py-24" ref={componentRef}>
          <p>
            Read More Book Store <br />
            24, Crosby Lane <br />
            Bangalore 600045 <br />
            20th August 2019 <br />
            The Manager <br />
            Zack Publishing House <br />
            Mumbai 400012 <br />
          </p>
          <h1 className="text-1xl my-7">
            Subject: Acknowledge of budget approval letters..
          </h1>
          <p>Sir,</p>

          <p className="text-justify">
            We would like to inform that, we have received your approved letter
            in time.We would like to inform that, we have received your approved
            letter in time.We would like to inform that, we have received your
            approved letter in time.We would like to inform that, we have
            received your approved letter in time.We would like to inform that,
            we have received your approved letter in time.We would like to
            inform that, we have received your approved letter in time. We have
            received the undermentioned budget letters.
          </p>
          <br />
          <table className="table table-compact ">
            <thead className="text-left">
              <tr>
                <th> Ser No</th>
                <th> Allotment Auth</th>
                <th> Updated On</th>
                <th> Tk</th>
              </tr>
            </thead>
            <tbody>
              {currentallotments.map((allotment, index) => (
                <tr allotment={allotment} key={allotment.id}>
                  <th className="text-center">{index + 1}</th>
                  <td> {allotment.alloted_auth}</td>
                  <td className="text-left"> {allotment?.alloted_on}</td>
                  <td className="text-left">
                    {allotment?.alloted_amount?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <p>
            We have received the above mentioned ref letter/ letters in time. I
            are grateful for your kind approval of the allotments.
            <br />
            <br />
            Thank you in advance.
            <br />
            Yours faithfully,
            <br />
            Signature
          </p>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          activeLinkClassName="active"
          previousLinkClassName="page-number"
          nextLinkClassName="page-number"
          pageLinkClassName="page-number"
        />
      </section>
    </div>
  );
};

export default AckAllotment;
