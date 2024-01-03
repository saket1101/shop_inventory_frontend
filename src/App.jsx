import React from "react";
import {Routes,Route} from "react-router-dom";
import Registration from "./Pages/auth/Registration";
import Login from "./Pages/auth/Login";
import Home from "./Pages/home/home";
import Navbar from "./constant/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;

