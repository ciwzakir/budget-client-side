import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { SuppliersContext } from "./SumSuppliers";

const PaginateSupplier = () => {
  const expenses = useContext(SuppliersContext);

  const tableRef = useRef(null);
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

  return (
    <div className="overflow-x-auto my-10  ml-48 py-10">
      <section>
        <h1 className="text-5xl my-10 text-center w-2/3"> Paid by Cheque </h1>

        <table ref={tableRef} className="table table-compact w-2/3 ">
          <thead className="text-center">
            <tr>
              <th> Ser No</th>
              <th> Supplier ID</th>
              <th> Supplier Name</th>
              <th> Total Exp</th>
              <th> Income Tax</th>
              <th> VAT</th>
              <th> Paid Amount</th>
              <th> Payment Method</th>
              <th> Update Date</th>
            </tr>
          </thead>
          <tbody>
            {numAscendingData
              .filter((expense) => expense.is_cheque === true)
              .map((expense, index) => (
                <tr expense={expense} key={expense.slug}>
                  <th className="text-center">{index + 1}</th>
                  <td> {expense.item_supplier.id}</td>
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
                  <td className="text-center">
                    {expense.is_cheque === true ? <p>cheque</p> : <p>Cash</p>}
                  </td>
                  <td className="text-center"> {expense.updated_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      <section className="my-24">
        <h1 className="text-5xl my-10 text-center w-2/3"> Paid by Cash </h1>
        <table ref={tableRef} className="table table-compact w-2/3 ">
          <thead className="text-center">
            <tr>
              <th> Ser No</th>
              <th> Supplier ID</th>
              <th> Supplier Name</th>
              <th> Total Exp</th>
              <th> Income Tax</th>
              <th> VAT</th>
              <th> Paid Amount</th>
              <th> Payment Method</th>
              <th> Update Date</th>
            </tr>
          </thead>
          <tbody>
            {numAscendingData
              .filter((expense) => expense.is_cheque === false)
              .map((expense, index) => (
                <tr expense={expense} key={expense.slug}>
                  <th className="text-center">{index + 1}</th>
                  <td> {expense.item_supplier.id}</td>
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
                  <td className="text-center">
                    {expense.is_cheque === true ? <p>cheque</p> : <p>Cash</p>}
                  </td>
                  <td className="text-center"> {expense.updated_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      <div className=" w-2/3 ">
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
  );
};

export default PaginateSupplier;
