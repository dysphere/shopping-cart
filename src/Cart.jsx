import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./ShopContext";
import { ShopProvider } from "./ShopProvider";
import Header from "./Header";

const Cart = () => {

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

}

export default Cart;