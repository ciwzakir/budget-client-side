import React, { useContext } from 'react';
import { BillContext } from '../../SingleDetails';
import "./Account.css";


const PaymentMethod = () => {
    const {is_cheque } = useContext(BillContext)
    return (
        <div className="basis-1/3 payment-method">
        {is_cheque === true ? (
          <div className="text-left">
            <h5 className="sign-margin">
              
              <u> PAID BY CHEQUE</u>
            </h5>
            <ul>
              <li className='mt-7'>Sign : ............................</li>
              <li>CDC : ............................</li>
              <li>Date : ............................</li>
            </ul>
          </div>
        ) : (
          <div className="text-left">
            <h5 className="sign-margin">
              
              <u className='ml-7'>CASH RECEIVED BY</u>
            </h5>
            <ul className='mt-7'>
              <li>Sign : ...........................</li>
              <li>Name : .......................</li>
              <li>Rank : ..........................</li>
              <li>BD/ : ............................</li>
              <li>Date : ..........................</li>
            </ul>
          </div>
        )}
      </div>
    );
};

export default PaymentMethod;