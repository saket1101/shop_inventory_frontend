import React from "react";
import {Router,Routes,Route} from "react-router-dom";
import Registration from "./Pages/auth/Registration";
import Login from "./Pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;

