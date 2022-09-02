import React from 'react';
var array = [
    { Id: "001", qty: 10 }, 
    { Id: "002", qty: 2 }, 
    { Id: "002", qty: 2 }, 
    { Id: "002", qty: 2 }, 
    { Id: "001", qty: 20 }, 
    { Id: "003", qty: 4 }
  ];
  
  var result = [];
  array.reduce(function(res, value) {
    if (!res[value.Id]) {
      res[value.Id] = { Id: value.Id, qty: 0 };
      result.push(res[value.Id])
    }
    res[value.Id].qty += value.qty;
    return res;
  }, {});
  
  console.log(result)


const FilterData = () => {
    return (
        <div>
            
        </div>
    );
};

export default FilterData;