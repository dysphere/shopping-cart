import React, {useState, useEffect} from 'react';
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

    const removeFromCart = (product) => {
        setCartItems((currentItems) => {
            return currentItems.filter(() => {})
        });
    };

    const lowerCartItems = (product) => {}

    const raiseCartItems = (product) => {}

    useEffect(() => {
        const cartCheck = sessionStorage.getItem('cartItems');
        if (cartCheck) {
            try {
                setCartItems(JSON.parse(cartCheck));
            } catch (e) {
                console.error('Error parsing cart items:', e);
            }
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

    return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart, lowerCartItems, raiseCartItems }}>
        {children}
      </ShopContext.Provider>
      );
};
