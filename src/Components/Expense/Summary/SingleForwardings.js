import { createContext, useContext, useRef } from "react";
import { ForwardingsContext } from "./Forwardings";
import { useReactToPrint } from "react-to-print";
import "./Forwardings.css";
import DeepNestedMap from "./DeepNestedMap";
export const NesttedContext = createContext("nnested context");

const SingleForwardings = () => {
  const { item_supplier, total_exp, total_tds, total_vds, total_paid ,transactions, id} =
    useContext(ForwardingsContext);
 

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Now",
  });

  console.log("transactions is " + { transactions });
  return (
    <div className="my-11 w-2/3 ml-24 ">
      <div className="cheque px-12 text-justify" ref={componentRef}>
        <h2 className="card-title my-7">
          Past due Payment of LP Bills : FY 2022-2023
        </h2>

        <p className="py-3">
          Respected
          <span className="supplier-info px-2 underlinesdotted">
            {item_supplier?.name}
          </span>
          ,
        </p>

        <p className="pr-7">
          We would like to inform you that we have issued a cheque bearing no
          <span className="supplier-info"> CDB ..................... </span>
          dated <span className="supplier-info"> ..................... </span>
          amounting Tk.
          <span className="supplier-info underlinesdotted px-2">
            {total_paid}
          </span>
          &#40; &#41; for the supply of your products/ Goods. Asper govt. rules
          tk.
          <span className="supplier-info underlinesdotted px-2">
            {total_tds}
          </span>
          as income Tax and Tk.
          <span className="supplier-info">{total_vds}</span>
          as VAT has been deducted from your total bill/ bills &#40;
          <span className="supplier-info underlinesdotted">{total_exp}</span>
          &#41; . Details of your invoice is/are as under :
        </p>
        <table
          id="table-to-xls"
          className="table table-compact w-3/4 my-10 ml-10"
        >
          <thead className="text-center">
            <tr>
              <th> Ser No</th>
              <th> Bill No </th>
              <th> Bill Date</th>
              <th> Amount (Tk)</th>
            </tr>
          </thead>

          <thead className="text-center">
            <tr className="text-right pr-10">
              <td colSpan={3}> Total =</td>

              <td className="pr-10"> {total_exp.toFixed(2)}</td>
            </tr>
          </thead>

          <body>
          {transactions.keys(id).map((id, index) => {
        return (
          <div key={index}>
            <h2>
              {id}: {transactions[id]}
            </h2>

            <hr />
          </div>
        );
      })}
          </body>
        </table>
        <p className="text-justify">
          Please, acknowledge the receipt of the cheque by attaching a revenue
          stamp of tk.10. If you have any query regarding this payment, do not
          hesitate to contact us.{" "}
        </p>
        <p className="mt-7 mb-3">To</p>
        <p> {item_supplier?.name}</p>
        <p> {item_supplier?.address}</p>
      </div>
      <button onClick={handlePrint} className="btn btn-outline text-left mt-11">
        Print This Letter
      </button>
    </div>
  );
};

export default SingleForwardings;
{/* <tr
elements={elements}
key={elements.id}
className="text-center border-spacing-px "
>
<th>{index + 1}</th>
<td>{elements.invoice_no}</td>
<td>{elements.invoice_date}</td>
<td className="text-right pr-10">
  {elements.amount.toFixed(2)}
</td>
</tr> */}