import Header from "./Header";
import { Link } from "react-router-dom";

const ErrorText = () => {
    return (<div className="flex flex-col items-center pt-40">
    <h2 className="font-bold text-lg">Oops!</h2>
    <p className="text-base">{"You shouldn't be here!"}</p>
    <Link to="/" className="text-blue-500">Click here to return to home</Link>
    </div>)
}

const ErrorPage = () => {
return (<div>
    <Header></Header>
    <ErrorText></ErrorText>
</div>)
}

export default ErrorPage;