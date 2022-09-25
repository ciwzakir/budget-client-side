import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const SingleCertificates = ({ summary }) => {
  const { item_supplier, total_exp, total_tds, total_vds } = summary;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Now",
    // onAfterPrint: alert('Printed Successfully')
  });

  return (
    <div className="my-2 " >
      <div className="flex flex-col w-full border-opacity-50 mx-auto" ref={componentRef}>
        <div className="grid h-400 card bg-base-200 rounded-box place-items-center p-5" >
          <h1 className="text-center text-1xl my-2">
            <u > INCOME TAX CERTIFICATE</u>
          </h1>
          <p>
            As per Govt rules 1984 and ...... Tk <span className="px-2">{total_tds?.toFixed(2)}</span> as TDS and
            from <span className="px-2">{item_supplier?.name}</span>. Their total bill amount is
          <span className="px-2">  {total_exp?.toFixed(2)}</span>
            the deducted tax deposted to govt treasury to ............. Bank.
            Details of Challan is as under:
          </p>

          <table className="table table-compact w-2/3 my-5 text-center" >
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
                <td>14 Jul 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>2</td>
                <td>14 Aug 2022</td>
                <td>1000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>3</td>
                <td>14 Sep 2022</td>
                <td>3500000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>4</td>
                <td>14 Oct 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>5</td>
                <td>14 Nov 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>6</td>
                <td>14 Dec 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>

              <tr>
                <td>8</td>
                <td>14 Jan 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>7</td>
                <td>14 Feb 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>9</td>
                <td>14 Mar 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>10</td>
                <td>14 April 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>11</td>
                <td>14 May 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>12</td>
                <td>14 Jun 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>13</td>
                <td>30 Jun 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
            </tbody>
          </table>

          <div className="flex w-full">
            <div className="grid h-20 flex-grow card  place-items-center">
              Date : ................
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card  place-items-center">
              Signature of the Authority
            </div>
          </div>
        </div>
      
     
        <div className="grid h-450 card bg-base-200 rounded-box place-items-center p-5 mt-96 mx-auto">
          <h1 className="text-center text-1xl my-2">
            <u> VAT CERTIFICATE</u>
          </h1>
          <p>
            Asper Value Added Tax Act 1991 and 2012, Tk <span className="px-2">{total_vds?.toFixed(2)}</span> as VDS and
            from <span className="px-2">{item_supplier?.name}</span>. Their total bill amount is
           <span className="px-2"> {total_exp?.toFixed(2)}</span>
            the deducted tax deposted to govt treasury to ............. Bank.
            Details of Challan is as under
          </p>

          <table className="table table-compact w-2/3 my-5 text-center">
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
                <td>14 Jul 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>2</td>
                <td>14 Aug 2022</td>
                <td>1000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>3</td>
                <td>14 Sep 2022</td>
                <td>3500000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>4</td>
                <td>14 Oct 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>5</td>
                <td>14 Nov 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>6</td>
                <td>14 Dec 2022</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>8</td>
                <td>14 Jan 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>7</td>
                <td>14 Feb 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>

              <tr>
                <td>9</td>
                <td>14 Mar 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>10</td>
                <td>14 April 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>11</td>
                <td>14 May 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>12</td>
                <td>14 Jun 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
              <tr>
                <td>13</td>
                <td>30 Jun 2023</td>
                <td>2000000</td>
                <td>ABC Bank</td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-full">
            <div className="grid h-20 flex-grow card  place-items-center">
              Date : ................
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card place-items-center">
              Signature of the Authority
            </div>
          </div>
        </div>
      </div>
    
      <button onClick={handlePrint} className="btn btn-outline my-11 ml-48">
        Print Certificates
      </button>
    </div>
  );
};

export default SingleCertificates;
