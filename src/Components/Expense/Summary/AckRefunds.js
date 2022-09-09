import React, { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import ReactPaginate from "react-paginate";

const AckRefunds = () => {
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

  const [refunds, setRefunds] = useState([]);

  useEffect(() => {
    fetch(
      `https://zenithciw.pythonanywhere.com/refunds/?ordering=id&refund_on__gte=${format(
        startdate,
        "MM/dd/yyyy"
      )}&refund_on__lte=${format(enddate, "MM/dd/yyyy")}`
    )
      .then((res) => res.json())
      .then((data) => setRefunds(data));
  }, [startdate, enddate]);

  const [currentrefunds, setCurrentrefunds] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentrefunds(refunds.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(refunds.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, refunds]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % refunds.length;
    setItemOffset(newOffset);
  };

  // const numAscendingData = [...currentallotments].sort((a, b) =>
  //   a.item_supplier?.name > b.item_supplier?.name ? 1 : -1
  // );

  return (
    <div className="main-container my-24">
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

      <section className="my-24">
        <div className="overflow-x-auto ">
          <div className="refund-top ">
            <div className="hero min-h-full bg-base-200 py-48">
              <div className="hero-content flex-col lg:flex-row">
                <ul className="steps">
                  <li className="step step-primary"> From Date</li>
                  <li className="step step-primary"> To Date</li>
                  <li className="step step-primary"> Results Bellow</li>
                </ul>
                <div className="ml-11">
                  <h2 className="text-5xl font-bold">
                    {" "}
                    Steps should follow to get{" "}
                    <span className="text-red-800">
                      Refunds !
                    </span> allotments{" "}
                  </h2>
                  <p className="py-6">
                    First select from date and To date asper your requirements.
                    Then you will see here an automated reports of refunds in
                    this period. And you may acknowledge the following reference
                    letters.
                  </p>
                  <button className="btn btn-primary"> See Bellow</button>
                </div>
              </div>
            </div>
          </div>
          <div className="refund-body mt-48 ml-24 mr-48">
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
              Subject: Acknowledge of{" "}
              <span className="text-primary">refunds</span> letters
            </h1>
            <p>
              Sir, <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ex
              placeat quod minima inventore minus qui hic nobis atque eum. Non
              quam accusantium corporis facilis <br /> voluptatum suscipit
              minima nesciunt ullam? Velit ut reiciendis dolore sed natus nulla
              tempora pariatur!
            </p>
            <br />
            <table className="table table-compact ">
              <thead className="text-left">
                <tr>
                  <th> Ser No</th>
                  <th> Refund Auth</th>
                  <th className="px-24"> Refund On</th>
                  <th> Tk</th>
                </tr>
              </thead>
              <tbody>
                {currentrefunds.map((refund, index) => (
                  <tr key={refund.id}>
                    <th className="text-center">{index + 1}</th>
                    <td> {refund.refund_auth}</td>
                    <td className="text-left px-24"> {refund?.refund_on}</td>
                    <td className="text-left">
                      {" "}
                      {refund?.refund_amount?.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <p>
              We have received the above mentioned ref{" "}
              <span>{currentrefunds.length > 1 ? "letters" : "letter"}</span> in
              time. We are grateful for your kind approval of the Refund.
              <br />
              <br />
              Thank you in advance.
              <br />
              Yours faithfully,
              <br />
              Signature
            </p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AckRefunds;
