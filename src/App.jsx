import React from "react";
import {Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

