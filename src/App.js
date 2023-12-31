import React from "react";
import Home from "./component/Home"
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Bca1 from "./component/Bca1";
import Bcom1 from "./component/Bcom1"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="bca1" element={<Bca1/>} />
        <Route path="bcom1" element={<Bcom1/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
