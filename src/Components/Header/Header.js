import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const navbarItems = (
    <>
    <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        {/* {user && ( */}
        <>
          <li>
            <Link to="/addproduct">Add Products</Link>
          </li>
          <li>
            <Link to="/manageproducts">Manage Products</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
   
      </li>
      <li>
        <>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
        </>
        <>
          <li>
            <Link to="/study">My Preparation</Link>
          </li>
        </>
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>

      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        {user ? (
          <button className="" onClick={handleLogOut}>
            Log out
          </button>
        ) : (
          <Link as={Link} to="login">
            Log In
          </Link>
        )}
      </li>

    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Eagle Camera House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navbarItems}</ul>
      </div>

      <div className="navbar-end">
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
