import Header from "./Header";
import { Link } from "react-router-dom";

const DefaultCategoryText = () => {
    return (<div className="flex flex-col items-center pt-40">
    <h2 className="font-bold text-lg">Oops! Invalid Category!</h2>
    <p className="text-base">Why not check out these store categories instead?</p>
    <div className="flex gap-4">
    <Link to="/shop/electronics" className="text-blue-500">Electronics</Link>
    <Link to="/shop/jewelry" className="text-blue-500">Jewelry</Link>
    <Link to="/shop/mens%20clothing" className="text-blue-500">{"Men's Clothing"}</Link>
    <Link to="/shop/womens%20clothing" className="text-blue-500">{"Women's Clothing"}</Link>
    </div>
    </div>)
}

const DefaultCategory = () => {
    return (<div>
        <Header></Header>
        <DefaultCategoryText></DefaultCategoryText>
    </div>)
}

export default DefaultCategory;