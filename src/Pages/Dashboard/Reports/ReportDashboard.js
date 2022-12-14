import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import './reportDashboard.css'
import auth from "../../../Firebase/Firebase.init";

// import useAdmin from "../../Hooks/useAdmin";

const ReportDashboard = () => {
  const [user] = useAuthState(auth);
  // const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500 mx-5 my-5">
          My Reports
        </h2>
        <Outlet ></Outlet>
      </div>
      <div className="drawer-side mt-11 bg-drawer">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li><Link to="/reports">All Expenditure</Link> </li>
          <li><Link to="/reports/codes">As Per Codes</Link></li>
          <li><Link to="/reports/fundposition">Fund Position</Link></li>
          <li><Link to="/reports/suppliers">As Per Suppliers</Link> </li>
          <li><Link to="/reports/certificates">Certificates</Link> </li>
          <li><Link to="/reports/forwarding">Forwarding</Link> </li>
          <li><Link to="acknowbgt">Ack Budget</Link> </li>
          <li><Link to="ackrefund">Act Bgt Refund</Link>  </li>
          <li><Link to="backend">Add More</Link>  </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportDashboard;
