import React, { useEffect, useState, useRef } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { DownloadTableExcel } from "react-export-table-to-excel";
import Footer from "../../Footer/Footer";

const MasterBills = () => {
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
    fetch(`https://zenithciw.pythonanywhere.com/exp/?ordering=expenditure_code&updated_at__gte=${format(
        startdate,
        "MM/dd/yyyy"
      )}&updated_at__lte=${format(enddate, "MM/dd/yyyy")}`
    )
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [startdate, enddate]);

  const [currentExpenses, setCurrentExpenses] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentExpenses(expenses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(expenses.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, expenses]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % expenses.length;
    setItemOffset(newOffset);
  };

  const navigate = useNavigate();
  const navigateToSeeDetails = (id) => {
    navigate(`/reports/${id}`);
  };

  console.log(currentExpenses);

  return (
    <div className="main-container">
      <section><h1 className="my-7 text-3xl text-center"> Select your date in accordance with your requirements</h1></section>
      <section className="mt-48">
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
        <div className="overflow-x-auto my-24 py-10">
          <h1 className="text-5xl my-10 text-center"> Reports </h1>
          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button class="btn btn-outline my-3">Download Excel</button>
          </DownloadTableExcel>

          <table ref={tableRef} className="table table-compact w-full">
            <thead className="text-center">
              <tr>
                <th> Ser No</th>
                <th> ID</th>
                <th> Exp Codes</th>
                <th> Supplier</th>
                <th> Avaiable Allotment</th>
                <th> Exp By this Bill</th>
                <th> Income Tax</th>
                <th> VAT</th>
                <th> Paid</th>
                <th> Updated On</th>
                <th> View Details</th>
              </tr>
            </thead>
            <tbody>
              {currentExpenses.map((expense, index) => (
                <tr expense={expense} key={expense.slug}>
                  <th className="text-center">{index + 1}</th>
                  <td> {expense.id}</td>
                  <td className="text-left">{expense.expenditure_code.name}</td>
                  <td className="text-left"> {expense.item_supplier.name}</td>
                  <td className="text-right"> {expense.get_prog_alts}</td>
                  <td className="text-right"> {expense.get_totals}</td>
                  <td className="text-right"> {expense.get_income_tax}</td>
                  <td className="text-right"> {expense.get_value_added_tax}</td>
                  <td className="text-right"> {expense.get_paid_amount}</td>
                  <td className="text-center"> {expense.updated_at}</td>
                  <td className="text-center">
                    <button
                      class="btn btn-outline btn-info"
                      onClick={() => navigateToSeeDetails(expense.id)}
                    >
                      Details || No of Bills {expense.get_children_length}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MasterBills;
