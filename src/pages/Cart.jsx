import React from 'react';
import { useState } from 'react';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {cartItems.length >=1 && (
                    <button className="clear-cart-button" onClick={handleCartClearance}>
                        Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length ===0 && (
            <div className="cart-items-empty">No items are added.</div>
            )}

            <div>
                {cartItems.map((item) =>(
                    <div key={item.id} className="cart-items-list">
                        <img 
                            className="cart-items-image" 
                            src={item.image} 
                            alt={item.name}
                        />
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;