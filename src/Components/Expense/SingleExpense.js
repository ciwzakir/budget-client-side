import React from 'react';


const SingleExpense = ({expense}) => {
  const {expenditure_code,item_supplier, total_exp,total_tds, total_vds, total_paid} =expense;
  console.log(expense);
  // console.log(transactions);


  
    return (      
              <tr >              
                   <td>{expenditure_code.name}</td>                               
                   <td>{item_supplier.name}</td>                               
                   <td>{total_exp}</td>                  
                   <td>{total_tds}</td>                  
                   <td>{total_vds}</td>                  
                   <td>{total_paid}</td>                                            
              </tr>
        
    );
};

export default SingleExpense;