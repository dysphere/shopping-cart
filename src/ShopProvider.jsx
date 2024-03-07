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
            return currentItems.filter((item) => {
                return item.id != product.id;
            })
        });
    };

    const lowerCartItems = (product) => {
        let itemQuant = product.quantity - 1;
        if (itemQuant === 0) {
            removeFromCart(product);
        }
        else {
            setCartItems((currentItems) => {
                return currentItems.map((item) => {
                    return item.id === product.id ? {...item, quantity: Math.max(1, product.quantity - 1)} : item;
                })
            });
        }
    }

    const raiseCartItems = (product) => {
        setCartItems((currentItems) => {
            return currentItems.map((item) => {
                return item.id === product.id ? {...item, quantity: product.quantity + 1} : item;
            })
        })
    }

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
