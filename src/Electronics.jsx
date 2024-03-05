import Header from "./Header";
import { Label } from "./assets/CommonShop";
import { ProductShop } from "./assets/ProductHook";
import { useEffect, useContext } from "react";
import { ShopContext } from "./ShopContext";


const Electronics = () => {

    const {cartItems, addToCart} = useContext(ShopContext);

    useEffect(() => {
        console.log(cartItems);
        console.log(sessionStorage.getItem('cartItems'));
    }, [cartItems]);

return (<div>
    <Header></Header>
    <Label section="Electronics"></Label>
    <ProductShop section="electronics"></ProductShop>
    </div>)
}

export default Electronics;