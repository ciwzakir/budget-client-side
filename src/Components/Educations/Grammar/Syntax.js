import React from "react";

const Syntax = () => {
  return (
    <div>
 
      <section>
      <h1 className="text-5xl font-bold">
                Syntax/ Corrections
       </h1>
      </section>

     
      
      <section className="ml-36 my-24">
        <h1 className="text-5xl my-5"> NU Board Question </h1>

        <div className="overflow-x-auto">
          <table className="table w-3/4">
            <thead>
              <tr>
                <th>As Directed</th>
                <th>Answer</th>
                <th> Remarks</th>
                <th> Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One should do  <span className="pr-1">   <s> his </s></span> duty</td>
                <td>One should do  <span className="pr-1">   &#x2713;  one's </span> duty</td>
                <td> .... </td>
                <td> 2012</td>
              </tr>
              <tr>
                <td>He is   <span className="pr-1">   <s> comparatively </s></span> better today</td>
                <td>He is   <span className="pr-1">   &#x2713;  better  </span> today.</td>
                <td> x comparatively</td>
                <td> 2012</td>
              </tr>
              <tr>
                <td>I prefer vegetable <span className="pr-1">   <s> more than </s></span> meat</td>
                <td>I prefer vegetable   <span className="pr-1">   &#x2713;  to </span> meat.</td>
                <td> prefer to (I prefer reading to playing)</td>
                <td> 2012</td>
              </tr>
          
              <tr>
                <td>Can you tell me where  <span className="pr-1">   <s> does he live </s></span>? </td>
                <td>Can you tell me where   <span className="pr-1">   &#x2713;  he lives?  </span> .</td>
                <td> No question in Sub Clause</td>
                <td> 2012</td>
              </tr>
              <tr>
                <td>She fell down due to her carelessness.  <span className="pr-1">   <s>  </s></span> </td>
                <td>  <span className="pr-1">   &#x2713;   </span> .</td>
                <td> No question in Sub Clause</td>
                <td> 2012</td>
              </tr>
              <tr>
                <td>He insisted  me <span className="pr-1">   <s> to go  </s></span>there. </td>
                <td> He insisted  me <span className="pr-1">   &#x2713; on going  </span> there .</td>
                <td> insist on</td>
                <td> 2012</td>
              </tr>
              <tr>
                <td>Cut the <span className="pr-1">   <s>   </s></span>line. </td>
                <td> Cut <span className="pr-1">   &#x2713; off </span> line .</td>
                <td> insist on</td>
                <td> 2012</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Syntax;
