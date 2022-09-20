const BillBody = ({ expense }) => {
  const {
    expenditure_code,
    item_supplier,
    get_totals,
    get_paid_amount,
    get_children_length,
    taxrate,
    get_income_tax,
    vatrate,
    get_value_added_tax,
    get_serial_no,
    get_page_no,
    transactions,
  } = expense;
  console.log(transactions);

  return (
    <div>
      <table id="table-to-xls" className="table table-compact w-full">
        <thead className="text-center">
          <tr>
            <th> Ser No</th>
            <th> Bill No</th>
            <th>Bill Date</th>
            <th>LP No</th>
            <th>Ext RV/ SIB</th>
            <th>Amount (Tk)</th>
          </tr>
        </thead>
        <tbody>
          <tr expense={expense} key={expense.slug}>
            <td colSpan="6" className="text-center mx-auto">
              Expenditure incured on account of
              <strong>{expenditure_code?.heading}</strong> in respect of
              <strong>
                <br />
                {item_supplier?.name}
              </strong>
              . Necessary documents attached . <br /> Details info of the
              <span>{get_children_length > 1 ? "bills" : "bill"}</span>
              <span>{get_children_length > 1 ? "are" : "is"}</span> as bellow :
            </td>
          </tr>
          {transactions?.map((elements, index) => (
            <tr
              elements={elements}
              key={elements.id}
              className="text-center border-spacing-px "
            >
              <th>{index + 1}</th>
              <td>{elements.invoice_no}</td>
              <td>{elements.invoice_date}</td>
              <td>{elements.receivevoucher_no}</td>
              <td> {elements.lp_no}</td>
              <td className="text-right pr-10">{elements.amount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" className="text-right pr-10">
              Total =
            </td>
            <td className="text-right pr-10"> {get_totals?.toFixed(2)}</td>
          </tr>

          <tr>
            <td colSpan="2 ">
              Page No: {item_supplier?.regpage_no} and {get_page_no}
            </td>

            <td colSpan="3">
              - Income TAX @
              {taxrate > 0 ? (
                <span>{taxrate}</span>
              ) : (
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}
              %
            </td>

            <td className="text-right pr-10"> {get_income_tax?.toFixed(2)}</td>
          </tr>

          <tr className="text-start ">
            <td colSpan="2"> Ser No {get_serial_no}</td>
            <td colSpan="3">
              - VAT @
              {vatrate > 0 ? (
                <span>{vatrate}</span>
              ) : (
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}
              %
            </td>

            <td className="text-right pr-10">
              {get_value_added_tax?.toFixed(2)}
            </td>
          </tr>

          <tr>
            <td colSpan="5" className="text-right pr-2"></td>
            <td className="text-right pr-10"> {get_paid_amount?.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillBody;
