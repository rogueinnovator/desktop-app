import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="px-20 mt-5">
      <div className="navbar bg-slate-700 rounded-3xl px-8">
        <div className="flex-1">
          <span className="font-bold">DESKTOP APP</span>
        </div>
        <div className="flex-1">
          <Link to="/createUser">
            {" "}
            <span className="font-bold hover:bg-slate-600 px-3 py-2 rounded-3xl">
              Add new
            </span>
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/allusers">
            {" "}
            <span className="font-bold  hover:bg-slate-600 px-3 py-2 rounded-3xl">
              All Tenats
            </span>
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/pendingDues">
            {" "}
            <span className="font-bold hover:bg-slate-600 px-3 py-2 rounded-3xl">
              Pending dues
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
