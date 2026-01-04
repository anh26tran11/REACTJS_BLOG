import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,#5044e5_35%,rgba(0,212,255,1)_100%)]">
      <div className="flex flex-col border-[#e5e5e5] gap-6 border shadow-sm bg-white p-8 rounded-md max-w-3xl mx-auto h-fit relative">
        <div className="flex flex-col items-center justify-center gap-4 w-80">
          <Link to="/">
            <img className="w-15 h-15 mx-auto" alt="logo" src={logo} />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
