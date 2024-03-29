import Home from "./pages/Home";
import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="register" element={<Register/>} />
      <Route path="login" element={<Login/>} />
    </Routes>
  </BrowserRouter>;
};

export default App;