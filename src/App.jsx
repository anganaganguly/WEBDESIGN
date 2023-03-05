import Home from "./pages/Home";
import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
//import ProductDetails from "./containers/ProductDetails";
//import ProductPage from "./containers/ProductListing";
import "./App.css";
import { useState } from "react";
import Routess from "./routes/Routess";
import {popularProducts} from "./data";


const App = () => {

  const { productItems } = popularProducts;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id === product.id));
    } else {
      setCartItems(
        cartItems.map((item) => 
          item.id === product.id 
            ? {...ProductExist, quantity: ProductExist.quantity - 1}
            : item
         )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="register" element={<Register/>} />
      <Route path="login" element={<Login/>} />
    </Routes>
      {/* <Route path="cart" element={<Cart/>} />
      <Route path="product" element={<ProductPage/>} />
      <Route path="product/:productId" element={<ProductDetails/>} /> */}
    <Routes 
      productItems={productItems} 
      cartItems={cartItems} 
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}
    />
  </BrowserRouter>;
};

export default App;