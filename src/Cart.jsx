import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./ShopContext";
import Header from "./Header";

const Cart = () => {

    const {cartItems, addToCart} = useContext(ShopContext);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

}

export default Cart;