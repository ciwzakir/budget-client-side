import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";



const EducationDashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500 mx-5 my-5">
          My Study Admin
        </h2>
        <Outlet ></Outlet>
      </div>
      <div className="drawer-side mt-11 bg-drawer">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li><Link to="/study/clause">Clause</Link></li>
          <li><Link to="/study/article">Articles</Link></li>
          <li><Link to="/study/prepo">Preposition</Link></li>
          <li><Link to="/study/voice">Voice Change</Link></li>
          <li><Link to="/study/syntax">Syntax/Correction</Link></li>
          <li><Link to="/study">Pronoun</Link> </li>
          <li><Link to="/study/noun">Noun</Link></li>
          <li><Link to="/study/tense">Tense</Link></li>
          <li><Link to="/study/seqtense">Sequence of Tense</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default EducationDashboard;
