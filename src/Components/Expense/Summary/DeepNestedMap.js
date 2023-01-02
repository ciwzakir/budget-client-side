import React, { useContext } from 'react';
import { NesttedContext } from './SingleForwardings';

const DeepNestedMap = ({nested}) => {
    const [transactions] = nested;
    console.log('transactions');
    return (
        <body>
               {transactions?.map((elements, index) => (
            <tr elements={elements} key={elements.id} className="text-center border-spacing-px ">
              <th >{index + 1}</th>
              <td>{elements.invoice_no}</td>
              <td>{elements.invoice_date}</td>
              <td className="text-right pr-10">{elements.amount.toFixed(2)}</td>
            </tr>
          ))}
        </body>
    );
};

export default DeepNestedMap;