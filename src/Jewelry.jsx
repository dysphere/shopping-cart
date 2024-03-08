import Header from "./Header";
import { Label } from "./assets/CommonShop";
import { ProductShop } from "./assets/ProductHook";

const Jewelry = () => {

    return (<div>
        <Header></Header>
        <Label section="Jewelry"></Label>
        <ProductShop section="jewelery"></ProductShop>
        </div>)
}

export default Jewelry;