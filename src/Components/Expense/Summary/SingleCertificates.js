import React from "react";
import "./RefLtr.css";

const SingleCertificates = ({ summary }) => {
  const { item_supplier, total_exp, total_tds, total_vds, total_paid } =
    summary;
  console.log(summary);
  return (
    <div className="my-24 p-7">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-200 card bg-base-300 rounded-box place-items-center p-9 ">
          <h1 className="text-center text-1xl my-2">
            <u> INCOME TAX CERTIFICATE</u>
          </h1>
          <p>
            ............. Govt rules , Tk {total_tds?.toFixed(2)} as TDS and
            from {item_supplier?.name}. Their total bill amount is{" "}
            {total_exp?.toFixed(2)}
            the deducted tax deposted to govt treasury to ............. Bank.
            Details of Challan is as under
          </p>

          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th> TR NO</th>
                <th> TR Date</th>
                <th> Amount</th>
                <th> Bank Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
            </tbody>
          </table>

          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-left">
              Date : ................
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              Signature of the Authority
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">AND</div>
        <div className="grid flex-grow h-200 card bg-base-300 rounded-box place-items-center p-9 ">
          <h1 className="text-center text-1xl my-2">
            <u> VAT CERTIFICATE</u>
          </h1>
          <p>
            ............. Govt rules , Tk {total_vds?.toFixed(2)} as VDS and
            from {item_supplier?.name}. Their total bill amount is{" "}
            {total_exp?.toFixed(2)}
            the deducted tax deposted to govt treasury to ............. Bank.
            Details of Challan is as under
          </p>

          <table className="table table-compact w-full my-11">
            <thead>
              <tr>
                <th> TR NO</th>
                <th> TR Date</th>
                <th> Amount</th>
                <th> Bank Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>1</td>
                <td>14 Jan 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-left">
              Date : ................
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              Signature of the Authority
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCertificates;
