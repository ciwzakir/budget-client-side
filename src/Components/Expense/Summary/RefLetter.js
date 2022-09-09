// import React, { useEffect, useRef, useState } from "react";
// import "./RefLtr.css";
// import ReactPaginate from "react-paginate";

// const RefLetter = ({result}) => {
//   const tableRef = useRef(null);
//   const [currentExpenses, setCurrentExpenses] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 1;

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentExpenses(result.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(result.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, result]);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % result.length;
//     setItemOffset(newOffset);
//   };

//   const{item_supplier,total_paid,total_exp,total_tds,total_vds, }= result

//   console.log(result);
//   // console.log(transactions);
//   return (
//     <div className="my-24 p-7">
//       <div className="card w-200 bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title my-7"> Past due Payment of LP Bills : FY 2022-2023 </h2>

//           <p> Dear<span className="supplier-info px-2"> {item_supplier?.name} </span>  ,</p>

//           <p className="pr-24"> We would like to inform you that we have issued a cheque bearing no  <span className="supplier-info">CDB 7283866 </span> dated <span className="supplier-info"> 22 Aug 2022 </span>  amounting Tk. <span className="supplier-info"> {total_paid} </span> &#40; One crore one lac one thousand one hindred one only &#41; for the supply of your products/ Goods. Asper govt. rules tk. <span className="supplier-info"> {total_tds} </span> as income Tax and Tk. <span className="supplier-info"> {total_vds} </span> as VAT has/ have been deducted from your total bill/ bills &#40;<span className="supplier-info"> {total_exp} </span> &#41; . Details of your invoice is/are as under. </p>

//           <table id="table-to-xls" className="table table-compact w-3/4 my-10 ml-10">
//         <thead className="text-center">
//           <tr>
//             <th> Ser No</th>
//             <th> Bill No</th>
//             <th> Bill Date</th>
//             <th> LP No</th>
//             <th> RV No</th>
//             <th> Amount (Tk)</th>
//           </tr>
//         </thead>
//         <tbody>

//           {currentExpenses?.map((elements, index) => (
//             <tr elements={elements} key={elements.id} className="text-center border-spacing-px ">
//               <th >{index + 1}</th>
//               <td>{elements.invoice_no}</td>
//               <td>{elements.invoice_date}</td>
//               <td>{elements.receivevoucher_no}</td>
//               <td > {elements.lp_no}</td>
//               <td className="text-right pr-10">{elements.amount.toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//         <br />
//           <p>Please, acknowledge the receipt of the cheque by attaching a revenue stamp of tk.10. If you have any query regarding this letter or payment, please, do not hesitate to contact us. </p>
//           <p> Thank You</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>

//         <ReactPaginate
//             breakLabel="..."
//             nextLabel="Next >"
//             pageCount={pageCount}
//             onPageChange={handlePageClick}
//             marginPagesDisplayed={3}
//             pageRangeDisplayed={5}
//             previousLabel="< Previous"
//             renderOnZeroPageCount={null}
//             containerClassName="pagination"
//             activeLinkClassName="active"
//             previousLinkClassName="page-number"
//             nextLinkClassName="page-number"
//             pageLinkClassName="page-number"
//           />
//       </div>
//     </div>
//   );
// };

// export default RefLetter;
