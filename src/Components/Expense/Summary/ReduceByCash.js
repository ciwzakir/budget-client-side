import React, { useContext, useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { SuppliersContext } from "./SumSuppliers";


const ReduceByCash = () => {
  const tableRef = useRef(null);
  const expenses = useContext(SuppliersContext);

  var result = [];
  expenses.filter((expense) => expense.is_cheque === false)
  .reduce(function (res, value) {
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

  const supplierAscendingInfo = [...result].sort((a, b) =>
    a.item_supplier?.name > b.item_supplier?.name ? 1 : -1
  );

  return (
    <div className="ml-48">
      <h1 className="text-5xl my-10 text-center w-2/3">
        Summary of Cash Payment
      </h1>
      <DownloadTableExcel
        filename="Simmary Asper Supplier"
        sheet="Summaey Supplier"
        currentTableRef={tableRef.current}
      >
        <div className="text-left my-7 ">
          <button className="btn btn-outline btn-info text-left">
            Download Excel
          </button>
        </div>
      </DownloadTableExcel>
      <table ref={tableRef} className="table table-compact w-2/3  ">
        <thead className="text-center">
          <tr>
            <th> Ser No</th>
            <th> ID</th>
            <th> Supplier Name</th>
            <th> eTIN No</th>
            <th> VAT or BIN No</th>
            <th> Total Expenditure</th>
            <th> Income Tax</th>
            <th> VAT</th>
            <th> Paid</th>
          </tr>
        </thead>
        <tbody>
          {supplierAscendingInfo.map((summary, index) => (
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
     
   
    </div>
  );
};

export default ReduceByCash;
