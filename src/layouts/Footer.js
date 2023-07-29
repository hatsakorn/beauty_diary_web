import React from "react";
import { Link } from "react-router-dom";
import { Home, Reserve, Course, Wallet } from "../assets/icons/index";

function Footer() {
  return (
    <>
      <div className=" bg-rose-300 sticky bottom-0 w-[100%]">
        {/* {user ? () : ()} */}
        <div className="flex justify-between pl-10 pr-10 pt-2 pb-2">
          <div className="flex flex-col justify-between items-center">
            <Link to="/">
              <Home />
            </Link>
            <h2 className="mt-0 pt-0">Home</h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Link to="/reserve">
              <Reserve />
            </Link>
            <h2 className="mt-0 pt-0">Reserve</h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Link to="/courses">
              <Course />
            </Link>
            <h2>Courses</h2>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Link to="/wallet">
              <Wallet />
            </Link>
            <h2>Wallet</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
