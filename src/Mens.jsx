import Header from "./Header";
import { Label } from "./assets/CommonShop";
import { ProductShop } from "./assets/ProductHook";

const Mens = () => {
    return (<div>
        <Header></Header>
        <Label section="Men's Clothing"></Label>
        <ProductShop section="men's clothing"></ProductShop>
        </div>)
}

export default Mens;