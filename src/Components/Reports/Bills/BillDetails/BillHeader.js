import React, { useContext } from "react";
import { BillContext } from "../SingleDetails";

const BillHeader = ({ expense }) => {
  const { expenditure_code, get_prog_alts } = useContext(BillContext);
  const finYear = "2022-2023";
  return (
    <div className="px-5">
      <h2 className="text-2xl text-right">AF F.115</h2>
      <h3 className="text-2xl text-center my-4">
        <u>CONTINGENT BILL</u>
      </h3>
      <div className="flex flex-row text-left">

        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Reg Ser No</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">......./{finYear}</div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Ref No</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">
              ....../{expenditure_code?.voucher_head}/......../{finYear}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-left">
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Allotment</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">{get_prog_alts?.toFixed(2)}</div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Budget Code</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">
              {expenditure_code?.seven_digit_code}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-left">
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Expenditure</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12 text-sm">Purchase/Reapir/Assets Collction</div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Heading</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">{expenditure_code?.heading}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-left">
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Financial Year</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">{finYear}</div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Balance</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">
              {expenditure_code?.current_balance?.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-left mb-7">
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12">Auth</div>
            <div className="basis-1/12">:</div>
            <div className="basis-7/12">
              ..............................................
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-4/12"></div>
            <div className="basis-1/12"></div>
            <div className="basis-7/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillHeader;
