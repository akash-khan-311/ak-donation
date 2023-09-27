import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="block p-1 font-sans leading-normal mr-4 font-bold text-xl hover:text-red-600">
        <NavLink className="flex items-center" to="/">
          Home
        </NavLink>
      </li>
      <li className="block p-1 font-sans  leading-normal hover:text-red-600 mr-4  font-bold text-xl">
        <NavLink className="flex items-center " to="/donation">
          Dontaion
        </NavLink>
      </li>
      <li className="block p-1 fs   hover:text-red-600 mr-4 font-bold text-xl">
        <NavLink className="flex items-center" to="/statistics">
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="backdrop-blur-3xl bg-white/20 border-b-2">
      <div className="navbar container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3 z-50 relative p-2 shadow bg-black rounded-box w-52 "
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" z-10 menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
