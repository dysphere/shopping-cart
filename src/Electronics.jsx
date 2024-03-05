import { createTheme, MantineProvider, Container } from "@mantine/core";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./ShopContext";
import { ShopProvider } from "./ShopProvider";
import Header from "./Header";
import { Label, ProductCard } from "./assets/CommonShop";
import { useProducts } from "./assets/ProductHook";

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const ElectronicsShop = () => {
const {cartItems, addToCart} = useContext(ShopContext);
const {products, error, loading} = useProducts({section: 'electronics'});
const [productsState, setProductsState] = useState([]);

useEffect(() => {
    setProductsState(products.map((product) => ({
        ...product,
        disabled: product.quantity <= 0
    })));
}, [products])

function lowerCount(prodId) {
    setProductsState(currentProducts =>
        currentProducts.map(product =>
            product.id === prodId ? { ...product, quantity: Math.max(0, product.quantity - 1), disabled: product.quantity <= 1 } : product
        )
    );
}

function higherCount(prodId) {
    setProductsState(currentProducts =>
        currentProducts.map(product =>
            product.id === prodId ? { ...product, quantity: product.quantity + 1, disabled: false } : product
        )
    );
}

const cards = !loading && !error && productsState ? productsState.map((product) => (
    <div key={product.id}>
        <ProductCard
        title={product.title}
        image={product.image}
        price={product.price}
        quantity={product.quantity}
        lowerNumber={()=> {lowerCount(product.id)}}
        higherNumber={() => {higherCount(product.id)}}
        addToCart={() => {addToCart(product)}}
        disabled={product.disabled}/>
    </div>
)) : null;

if (error) return <p>A network error was encountered</p>;
if (loading) return <p>Loading...</p>;

return (
<div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">{cards}</div>
);
}

const Electronics = () => {

return (<div><MantineProvider theme={theme}>
    <ShopProvider>
    <Header></Header>
    <Label section="Electronics"></Label>
    <ElectronicsShop></ElectronicsShop>
    </ShopProvider>
    </MantineProvider></div>)
}

export default Electronics;