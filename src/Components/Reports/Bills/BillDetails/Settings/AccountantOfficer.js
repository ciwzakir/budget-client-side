import React from "react";
import "./Account.css";
const AccountantOfficer = ({ expense }) => {
  const { is_cheque } = expense;
  return (
    <div>
      <section>
        <div className="flex flex-row text-left">
          <div className="basis-1/3 signature">
            <h3 className="sign-margin">
              {" "}
              <u>Accountant Officer</u>
            </h3>
            <ul>
              <li>Sign </li>
              <li>Name </li>
              <li>Designation</li>
              <li>Appointment</li>
              <li>Office</li>
              <li>Date</li>
            </ul>
          </div>
          <div className="basis-1/3 countermargin signature ">
            {" "}
            <h3 className="sign-margin">
              <u>COUNTERSIGNED</u>
            </h3>
            <ul>
              <li>Sign </li>
              <li>Name </li>
              <li>Designation</li>
              <li>Appointment</li>
              <li>Office</li>
              <li>Date</li>
            </ul>{" "}
          </div>
          <div className="basis-1/3 payment-method">
            {is_cheque === true ? (
              <div className="text-left">
                <h5 className="sign-margin">
                  {" "}
                  <u> PAID BY CHEQUE</u>{" "}
                </h5>
                <ul>
                  <li>Sign : ............................</li>
                  <li>CDC : ............................</li>
                  <li>Date : ............................</li>
                </ul>
              </div>
            ) : (
              <div className="text-left">
                <h5 className="py-type-h sign-margin">
                  {" "}
                  <u>CASH RECEIVED BY</u>{" "}
                </h5>
                <ul>
                  <li>Sign : ...........................</li>
                  <li>Name : .......................</li>
                  <li>Rank : ..........................</li>
                  <li>BD/ : ............................</li>
                  <li>Date : ..........................</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountantOfficer;
