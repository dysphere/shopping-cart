import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./ShopContext";
import Header from "./Header";

const ReceiptCard = ({image, title, quantity, price, lowerCart, higherCart, removeCart}) => {
    let itemTotal = quantity * price;

    return (<div className="flex md:flex-row flex-col items-center gap-4 justify-evenly py-5 border-b-2">
        <div className="size-40 flex justify-center items-center">
        <img src={image} alt={title} className="object-contain max-w-full max-h-full"></img>
        </div>
        <p className="w-80">{title}</p>
        <div className="flex gap-3">
        <button onClick={lowerCart} className="bg-stone-950 w-8 text-white rounded-full font-bold">-</button>
        <p>Qty: {quantity}</p>
        <button onClick={higherCart} className="bg-stone-950 w-8 text-white rounded-full font-bold">+</button>
        </div>
        <p>{`$${price}`}</p>
        <p>{`$${itemTotal}`}</p>
        <button onClick={removeCart} className="font-bold rounded-full bg-red-600 text-white w-20">Delete</button>
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

    return (<div className="flex flex-col pt-10 px-8">
        <h2 className="font-bold">Summary</h2>
        <div>{freeShipState ? <p>You have complimentary free shipping.</p> : 
        <p>{`You need to spend $${freeShippingAmount()} to qualify for free shipping.`}</p>}</div>
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{`$${totalSum.toFixed(2)}`}</p>
        </div>
        <div className="flex justify-between">
            <p>Flat Shipping Rate</p>
            <p>{`$${shippingPrice()}`}</p>
        </div>
        <div className="flex justify-between">
            <p>Total</p>
            <p>{`$${allTotal().toFixed(2)}`}</p>
        </div>
        <div className="flex justify-center">
        <button className="bg-stone-950 w-24 text-white rounded-full font-bold">Checkout</button>
        </div>
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
        <div className="flex flex-col pt-10 px-8">
            <div className="flex justify-center"><h2 className="font-bold">Your Shopping Cart</h2></div>
            <div className="flex flex-col">
            {receipts}
            </div>
        </div>
    </div> : 
    <div className="flex flex-col items-center pt-40">
        <h2 className="font-bold text-lg">Your Cart is Currently Empty</h2>
        <p className="text-base">Start shopping now to see your shopping cart here!</p>
        </div>}</div>)
}

const Cart = () => {

    return (<div><Header></Header>
    <CartPage></CartPage></div>)

}

export default Cart;