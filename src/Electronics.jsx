import { Card, Image, TextInput, Group, Button, createTheme, MantineProvider, Container } from "@mantine/core";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./ShopContext";
import { ShopProvider } from "./ShopProvider";
import Header from "./Header";

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const Label = () => {
    return(<div><Container fluid><h1>
        Electronics</h1></Container></div>)
}

const useElectronics = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics', {mode: "cors"})
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
              return response.json();
        })
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                response[i].quantity = 0;
                response[i].disabled = false;
            }
            setProducts(response)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [])

    return {products, error, loading}
}

const ElectronicsCard = ({title, image, price, quantity, lowerNumber, higherNumber, addToCart, disabled}) => {

return (<Card>
    <Card.Section>
        <Image src={image} alt={title}></Image>
    </Card.Section>
    <Card.Section>
        <h2>{title}</h2>
        <p>${price}</p>
    </Card.Section>
    <Card.Section>
        <Group>
        <button onClick={lowerNumber} disabled={disabled}>-</button>
        <TextInput type="number"
        label="Quantity purchased"
        value={quantity}
        readOnly></TextInput>
        <button onClick={higherNumber}>+</button>
        </Group>
        <button onClick={addToCart}>Add to cart</button>
    </Card.Section>
</Card>)
}

const ElectronicsShop = () => {
const {cartItems, addToCart} = useContext(ShopContext);
const {products, error, loading} = useElectronics();
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
        <ElectronicsCard
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

useEffect(() => {
    console.log(cartItems);
}, [cartItems]);

if (error) return <p>A network error was encountered</p>;
if (loading) return <p>Loading...</p>;

return (
<div className="flex">{cards}</div>
);
}

const Electronics = () => {

return (<div><MantineProvider theme={theme}>
    <ShopProvider>
    <Header></Header>
    <Label></Label>
    <ElectronicsShop></ElectronicsShop>
    </ShopProvider>
    </MantineProvider></div>)
}

export default Electronics;