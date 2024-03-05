import { createContext } from "react";

export const ShopContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    lowerCartItems: () => {},
    raiseCartItems: () => {},
  });