import React from 'react';
import { useState } from 'react';

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {

        setCartItems([...cartItems, item]);

    };

    return (
    <div>
        <h2>Cart</h2> 
        <ul> 
            {cartItems.map((item) => ( 
            <li key={item.id}> 
                {item.name} - ${item.price} 
            </li> 
            ))} 
        </ul>
    </div>
    );
};

export default Cart;