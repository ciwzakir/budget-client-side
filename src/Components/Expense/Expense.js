import React, { useEffect, useState, useRef } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
import "./Exp.css";

const Expense = () => {
  const tableRef = useRef(null);
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
      `https://zenithciw.pythonanywhere.com/codes/?updated_at__gte=${format(
        startdate,
        "MM/dd/yyyy"
      )}&updated_at__lte=${format(enddate, "MM/dd/yyyy")}`
    )
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [startdate, enddate]);

  return (
    <div className="main-container">
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

      <section>
        <div className="overflow-x-auto my-10 py-10">
          <h1 className="text-5xl my-10 text-center"> All Reports </h1>

          {/* <DownloadTableExcel
            filename="All Data table"
            sheet="All"
            currentTableRef={tableRef.current}
          >
       <div className="text-left my-7"> <button className="btn btn-outline btn-info text-left">Download Excel</button></div>
          </DownloadTableExcel> */}
          <table ref={tableRef} className="table table-compact w-full">
            <thead className="text-center">
              <tr>
                <th> Ser No</th>
                <th> FK ID</th>
                <th> EXP ID </th>
                <th> Heading</th>
                <th> Supplier</th>
                <th> Total Exp</th>
                <th> Income Tax</th>
                <th> VAT</th>
                <th> Paid Amount</th>
                <th> Updated On</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr expense={expense} key={expense.slug}>
                  <th className="text-center">{index + 1}</th>
                  <td> {expense.expenditure_code.id}</td>
                  <td> {expense.id}</td>
                  {/* <td className="text-left"> {expense.total_allotments_codewise}</td> */}
                  <td className="text-left">
                    {expense.expenditure_code?.name}
                  </td>
                  <td className="text-left"> {expense.item_supplier?.name}</td>
                  <td className="text-right px-10">
                    {expense.total_exp?.toFixed(2)}
                  </td>
                  <td className="text-right px-10">
                    {expense.total_tds?.toFixed(2)}
                  </td>
                  <td className="text-right px-10">
                    {expense.total_vds?.toFixed(2)}
                  </td>
                  <td className="text-right px-10">
                    {expense.total_paid?.toFixed(2)}
                  </td>
                  <td className="text-center"> {expense.updated_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ReactPaginate
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
          /> */}
        </div>
      </section>
      <section>
        <h1 className="text-5xl my-10 text-center"> Summary asper Codes </h1>
        <DownloadTableExcel
          filename="Simmary Asper Codes"
          sheet="Summaey Codes"
          currentTableRef={tableRef.current}
        >
          <div className="text-left my-7">
            <button className="btn btn-outline btn-info text-left">
              Download Excel
            </button>
          </div>
        </DownloadTableExcel>
        <table ref={tableRef} className="table table-compact w-full">
          <thead className="text-center">
            <tr>
              <th> Ser No</th>
              <th> ID</th>
              <th> Full Name</th>
              <th> Budget Code</th>
              <th> Code Heading</th>
              <th> Total Allotments</th>
              <th> Total Expenditure</th>
              <th> Income Tax</th>
              <th> VAT</th>
              <th> Paid</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((summary, index) => (
              <tr key={summary.expenditure_code?.id}>
                <th className="text-center">{index + 1}</th>
                <td> {summary.id}</td>
                <td className="text-left"> {summary.expenditure_code?.name}</td>
                <td className="text-left">
                  {summary.expenditure_code?.seven_digit_code}
                </td>
                <td className="text-left">
                  {summary.expenditure_code?.heading}
                </td>
                <td className="text-right px-10">
                  {summary.total_allotments_codewise?.toFixed(2)}
                </td>
                <td className="text-right px-10">
                  {summary.total_exp?.toFixed(2)}
                </td>
                <td className="text-right px-10">
                  {summary.total_tds?.toFixed(2)}
                </td>
                <td className="text-right px-10">
                  {summary.total_vds?.toFixed(2)}
                </td>
                <td className="text-right px-10">
                  {summary.total_paid?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Expense;
