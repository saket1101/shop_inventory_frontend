import React from "react";
import {Router,Routes,Route} from "react-router-dom";
import Registration from "./Pages/auth/Registration";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/register" element={<Registration/>}/>
      </Routes>
    </>
  );
}

export default App;

