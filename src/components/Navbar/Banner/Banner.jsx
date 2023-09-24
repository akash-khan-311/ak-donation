import React from "react";
import "./Banner.css";
import Navbar from "../Navbar";

const Banner = () => {
  return (
    <div className="main">
      <div className="flex justify-center items-center h-[40vh]">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Category Name"
              className="input border-2 bg-white"
            />
            <button className="btn btn-error text-white">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
