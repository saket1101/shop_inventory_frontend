import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../constant/Navbar";
import { Outlet,Navigate } from "react-router-dom";

const ProtectRoute = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {user?.userId ? (
        <div>
          <Navbar/>
          <div></div>
          <div>
            <Outlet/>
          </div>
        </div>
      ) : (
        <Navigate to="/login" replace></Navigate>
      )}
    </div>
  );
};

export default ProtectRoute;
