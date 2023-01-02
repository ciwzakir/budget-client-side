import React, { useEffect, useState, useRef } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";




const SumOfCodes = () => {
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





  var result = [];
  expenses.reduce(function (res, value) {
    if (!res[value.expenditure_code.id]) {
      res[value.expenditure_code.id] = {
        id: value.expenditure_code.id,
        get_current_prog_of_allotment: 0,
        total_exp: 0,
        total_tds: 0,
        total_vds: 0,
        total_paid: 0,
        your_current_balance: 0,
        total_balance: 0,
      };
      result.push(res[value.expenditure_code.id]);
    }
    res[value.expenditure_code.id].expenditure_code = value?.expenditure_code;
    res[
      value.expenditure_code.id
    ].expenditure_code.get_current_prog_of_allotment =
      value?.expenditure_code?.get_current_prog_of_allotment;
    res[value.expenditure_code.id].total_exp += value?.total_exp;
    res[value.expenditure_code.id].total_tds += value?.total_tds;
    res[value.expenditure_code.id].total_vds += value?.total_vds;
    res[value.expenditure_code.id].total_paid += value?.total_paid;
    res[value.expenditure_code.id].current_balance =
      value?.expenditure_code?.current_balance;
    res[value.expenditure_code.id].total_balance +=
      value?.expenditure_code?.current_balance;
    return res;
  }, {});

  const resultAscendingData = [...result].sort((a, b) =>
    a.expenditure_code?.seven_digit_code > b.expenditure_code?.seven_digit_code
      ? 1
      : -1
  );

  return (
    <div className="main-container">
      <section className="mt-100">
        <div className="hero min-h-full bg-base-200 py-32 my-24">
          <div className="hero-content flex-col lg:flex-row">
            <div className="ml-11">
              <h2 className="text-5xl font-bold">
                Current 
                <span className="text-green-800"> Fund Position </span>
              </h2>
              <p className="py-12 text-1xl">
                Allotments and Current Balance depend on first July to today. In
                order to get accurate result please select start date always 1st
                July. First select from date and To date asper your
                requirements. Then you will see here an automated reports of current fund position
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-48">
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
              <h1 className="text-center text-xl">End Date</h1>
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
          <h1 className="text-5xl my-10 text-center"> All Data </h1>

          <table className="table table-compact w-full">
            <thead className="text-center">
              <tr>
                <th> Ser No</th>
                <th> Code ID</th>
                <th> Code Name</th>
                <th> Digital Code</th>
                <th> Heading</th>
                <th> V Head</th>
                <th> Total Bill</th>
                <th> TDS Amount</th>
                <th> VDS Amount</th>
                <th> Paid Amount</th>
                <th> Update Date</th>
              </tr>
            </thead>
            <tbody>
              {currentExpenses.map((expense, index) => (
                <tr expense={expense} key={expense.slug}>
                  <th className="text-center">{index + 1}</th>
                  <td> {expense.expenditure_code.id}</td>
                  <td className="text-left">
                    {expense.expenditure_code?.name}
                  </td>
                  <td className="text-left">
                    {expense.expenditure_code?.seven_digit_code}
                  </td>
                  <td className="text-left">
                    {expense.expenditure_code?.heading}
                  </td>
                  <td className="text-left">
                    {expense.expenditure_code?.voucher_head}
                  </td>
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
                    {/* {expense.total_paid?.toLocaleString(undefined, {maximumFractionDigits:2})} */}
                  </td>
                  <td className="text-center"> {expense?.updated_at}</td>
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

      <section>
        <h1 className="text-5xl my-10 text-center"> Current Fund Position </h1>
        <DownloadTableExcel
          filename="Simmary Asper Supplier"
          sheet="Summaey Supplier"
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
              <th> Code ID</th>
              <th> Code Name</th>
              <th> Digital Code</th>
              <th> Heading</th>
              <th> V Head</th>
              <th> Total Allotment</th>
              <th> Total Exp </th>
              <th> Total TDS </th>
              <th> Total VDS </th>
              <th> Total Paid </th>
              <th> Total Balance</th>
            </tr>
          </thead>
          <tbody>
            {resultAscendingData.map((summary, index) => (
              <tr key={summary.expenditure_code?.id} summary={summary}>
                <th className="text-center">{index + 1}</th>
                <td> {summary.id}</td>
                <td className="text-left"> {summary.expenditure_code?.name}</td>
                <td className="text-left">
                  {summary.expenditure_code?.seven_digit_code}
                </td>
                <td className="text-left">
                  {summary.expenditure_code?.heading}
                </td>
                <td className="text-left">
                  {summary.expenditure_code?.voucher_head}
                </td>

                <td className="text-right px-10">
                  {summary.expenditure_code?.progress_of_allotments?.toFixed(2)}
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
                {/* <td className="text-center">
                  {summary?.your_current_balance?.toFixed(2)}
                </td> */}
                <td className="text-right px-10">
                  {summary.expenditure_code?.current_balance?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* <section className="my-24">
        <h1 className="text-5xl my-10 text-center">
          Cheque Issue Letter to Supplier
        </h1>
        {resultAscendingData.map((summary) => (
          <RefLetter
            key={summary.item_supplier?.id}
            summary={summary}
          ></RefLetter>
        ))}
      </section> */}
    </div>
  );
};

export default SumOfCodes;
