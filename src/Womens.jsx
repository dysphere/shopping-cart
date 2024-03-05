import Header from "./Header";
import { Label } from "./assets/CommonShop";
import { ProductShop } from "./assets/ProductHook";

const Womens = () => {
    return (<div>
        <Header></Header>
        <Label section="Women's Clothing"></Label>
        <ProductShop section="women's clothing"></ProductShop>
        </div>)
}

export default Womens;