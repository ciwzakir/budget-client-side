import React from 'react';
import AccountantOfficer from './Settings/AccountantOfficer';


const BillFooter = ({expense}) => {
const {created_by } = expense;
console.log(expense)
return(
 
  <div className="">
          <div className='text-left'>
           <div className="my-2">
            <p>Prepared By : {created_by?.first_name}</p>
            <p>Checked By : {created_by?.last_name}</p>
            </div> 
        </div>
        <div className="">
        
        <AccountantOfficer expense={expense} key={expense.id}></AccountantOfficer>

        </div>
  </div>

)
};

export default BillFooter;