
const Forwardings = ({ expenses }) => {
 

  var result = [];
  expenses.reduce(function (res, value) {
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
    <div className="ml-48 my-48">
      <div className="cheque">
        <h2 className="card-title my-7">
          Past due Payment of LP Bills : FY 2022-2023
        </h2>

        <p>
          Respected
          <span className="supplier-info px-2">
            {supplierAscendingInfo?.name}
          </span>
          ,
        </p>

        <p className="pr-24">
          We would like to inform you that we have issued a cheque bearing no
          <span className="supplier-info">CDB ..................... </span>
          dated <span className="supplier-info"> .............. </span>
          amounting Tk.
          <span className="supplier-info">
            {supplierAscendingInfo?.total_paid}
          </span>
          &#40; One crore one lac one thousand one hindred one only &#41; for
          the supply of your products/ Goods. Asper govt. rules tk.
          <span className="supplier-info">
            {supplierAscendingInfo?.total_tds}
          </span>
          as income Tax and Tk.
          <span className="supplier-info">
            {supplierAscendingInfo?.total_vds}
          </span>
          as VAT has/ have been deducted from your total bill/ bills &#40;
          <span className="supplier-info">
            {supplierAscendingInfo?.total_exp}
          </span>
          &#41; . Details of your invoice is/are as under.
        </p>
      </div>
    </div>
  );
};

export default Forwardings;
