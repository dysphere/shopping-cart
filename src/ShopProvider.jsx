import React, {useState} from 'react';
import { ShopContext } from "./ShopContext";

export const ShopProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((currentItems) => {
            const index = currentItems.findIndex(item => item.id === product.id);
            if (index > -1) {
                return currentItems.map((item, i) => {
                    return i === index ? {...item, quantity: item.quantity + product.quantity} : item;
                })
            }
            else {
                return [...currentItems, product]
            }
        });
    };

    return (
    <ShopContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </ShopContext.Provider>
      );
};
