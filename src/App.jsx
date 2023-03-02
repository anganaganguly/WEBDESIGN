import Home from "./pages/Home";
import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./containers/ProductDetails";
import ProductPage from "./containers/ProductListing";
import "./App.css";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="register" element={<Register/>} />
      <Route path="login" element={<Login/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="product" element={<ProductPage/>} />
      <Route path="product/:productId" element={<ProductDetails/>} />
    </Routes>
  </BrowserRouter>;
};

export default App;