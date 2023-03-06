import React from 'react';
import Cart from '../pages/Cart';
import Products from '../routes/product/Products';
//import ProductDetails from '../containers/ProductDetails';
import { Route, Routes } from 'react-router-dom';


const Routess = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
        <Routes>
            <Route path="/product" 
                element={<Products 
                    productItems={productItems} 
                    handleAddProduct={handleAddProduct} 
                />}>
            </Route>
            <Route path="/cart" element={<Cart 
                    cartItems={cartItems} 
                    handleAddProduct={handleAddProduct} 
                    handleRemoveProduct={handleRemoveProduct}
                    handleCartClearance={handleCartClearance}
                />}>
            </Route>
        </Routes>
    </div>
  );
};

export default Routess;