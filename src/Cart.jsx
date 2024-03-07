import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Image } from "@mantine/core";
import Header from "./Header";

const ReceiptCard = ({image, title, quantity, price, lowerCart, higherCart, removeCart}) => {
    let itemTotal = quantity * price;

    return (<div className="flex md:flex-row flex-col items-center gap-4 justify-evenly">
        <div className="size-40 flex justify-center items-center">
        <Image src={image} alt={title} className="object-contain max-w-full max-h-full"></Image>
        </div>
        <p className="w-80">{title}</p>
        <div className="flex gap-3">
        <button onClick={lowerCart}>-</button>
        <p>Qty: {quantity}</p>
        <button onClick={higherCart}>+</button>
        </div>
        <p>{`$${price}`}</p>
        <p>{`$${itemTotal}`}</p>
        <button onClick={removeCart}>Delete</button>
    </div>)
}

const Total = () => {
    const {cartItems} = useContext(ShopContext);
    const [freeShipState, setFreeShipState] = useState(false);

    const totalSum = cartItems.reduce((accumulator, item) => {
        return accumulator + (item.quantity * item.price)
    }, 0)

    const shippingPrice = () => {
        if (totalSum >= 100) {
            return "0.00";
        }
        else {
            return "10.00";
        }
    }

    const allTotal = () => {
        if (freeShipState === true) {
            return totalSum;
        }
        else {
            return totalSum + 10;
        }
    }

    const freeShippingAmount = () => {
        return 100 - totalSum;
    }

    useEffect(() => {
        if (totalSum >= 100) {
            setFreeShipState(true);
        }
        else {
            setFreeShipState(false);
        }
    }, [totalSum])

    return (<div className="flex flex-col">
        <h2>Summary</h2>
        <div>{freeShipState ? <p>You have complimentary free shipping.</p> : 
        <p>{`You need to spend $${freeShippingAmount()} to qualify for free shipping.`}</p>}</div>
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{`$${totalSum}`}</p>
        </div>
        <div className="flex justify-between">
            <p>Flat Shipping Rate</p>
            <p>{`$${shippingPrice()}`}</p>
        </div>
        <div className="flex justify-between">
            <p>Total</p>
            <p>{`$${allTotal().toFixed(2)}`}</p>
        </div>
        <button>Checkout</button>
    </div>)
}

const CartPage = () => {
    const {cartItems, removeFromCart, lowerCartItems, raiseCartItems} = useContext(ShopContext);

    const receipts = cartItems ? cartItems.map((product) => (
        <div key={product.id}>
        <ReceiptCard
        image={product.image}
        title={product.title}
        quantity={product.quantity}
        price={product.price}
        lowerCart={() => lowerCartItems(product)}
        higherCart={() => raiseCartItems(product)}
        removeCart={() => removeFromCart(product)}
        >
        </ReceiptCard></div>
    )) : null;

    return (<div>{cartItems.length > 0 ? <div className="flex justify-center flex-col md:flex-row-reverse gap-5">
        <Total></Total>
        <div className="flex flex-col">
            <div className="flex justify-center"><h2>Your Shopping Cart</h2></div>
            <div className="flex flex-col">
            {receipts}
            </div>
        </div>
    </div> : 
    <div>
        <h2>Your Cart is Currently Empty</h2>
        <p>Start shopping now to see your shopping cart here!</p>
        </div>}</div>)
}

const Cart = () => {

    const {cartItems, addToCart, removeFromCart, lowerCartItems, raiseCartItems} = useContext(ShopContext);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (<div><Header></Header>
    <CartPage></CartPage></div>)

}

export default Cart;