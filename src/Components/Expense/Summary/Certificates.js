import React, { useEffect, useState, useRef } from "react";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
import SingleCertificates from "./SingleCertificates";

const Certificate = () => {
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

  const [currentExpenses, setCurrentExpenses] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 50;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentExpenses(expenses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(expenses.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, expenses]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % expenses.length;
    setItemOffset(newOffset);
  };

  const numAscendingData = [...currentExpenses].sort((a, b) =>
    a.item_supplier?.name > b.item_supplier?.name ? 1 : -1
  );

  var result = [];
  currentExpenses.reduce(function (res, value) {
    if (!res[value.item_supplier.id]) {
      res[value.item_supplier.id] = {
        id: value.item_supplier.id,
        transactions: value.transactions,
        total_exp: 0,
        total_tds: 0,
        total_vds: 0,
        total_paid: 0,
      };
      result.push(res[value.item_supplier.id]);
    }
    res[value.item_supplier.id].item_supplier = value?.item_supplier;
    res[value.item_supplier.id].total_exp += value?.total_exp;
    res[value.item_supplier.id].total_tds += value?.total_tds;
    res[value.item_supplier.id].total_vds += value?.total_vds;
    res[value.item_supplier.id].total_paid += value?.total_paid;
    return res;
  }, {});

  const numAscendingSummary = [...result].sort((a, b) =>
    a.item_supplier?.name > b.item_supplier?.name ? 1 : -1
  );

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
        <h1 className="text-5xl my-10 text-center"> Summary asper Supplier </h1>
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
        <table ref={tableRef} className="table table-compact w-3/4">
          <thead className="text-center">
            <tr>
              <th> Ser No</th>
              <th> ID</th>
              <th> Full Name</th>
              <th> TIN No</th>
              <th> VAT No</th>
              <th> Total Expenditure</th>
              <th> Income Tax</th>
              <th> VAT</th>
              <th> Paid</th>
            </tr>
          </thead>
          <tbody>
            {numAscendingSummary.map((summary, index) => (
              <tr key={summary.item_supplier?.id} summary={summary}>
                <th className="text-center">{index + 1}</th>
                <td> {summary.id}</td>
                <td className="text-left"> {summary.item_supplier?.name}</td>
                <td className="text-left">{summary.item_supplier?.tin_no}</td>
                <td className="text-left">{summary.item_supplier?.vat_no}</td>

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
                <td className="text-center"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="my-24">
        <h1 className="text-2xl my-10 text-center"> Inacome TAX and VAT Certificates</h1>
        {numAscendingSummary.map((summary) => (
          <SingleCertificates
            key={summary.item_supplier?.id}
            summary={summary}
          ></SingleCertificates>
        ))}
      </section>
    </div>
  );
};

export default Certificate;
