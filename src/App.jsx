import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/auth/Registration";
import Login from "./Pages/auth/Login";
import Home from "./Pages/home/Home";
import ProtectRoute from "./Middleware/ProtectRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="" element={<ProtectRoute />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
