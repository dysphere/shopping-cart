import { useParams } from "react-router-dom";
import Electronics from './Electronics'
import Jewelry from "./Jewelry";
import Mens from "./Mens";
import Womens from "./Womens";
import DefaultCategory from "./DefaultCategory";

const Categories = () => {
    const { section } = useParams();
  
    return (
      <div>
       {section === "electronics" ? (
        <Electronics/>
       ) : section === "jewelry" ? (
        <Jewelry/>
       ): section === "mens%20clothing" ? (
        <Mens/>
       ) : section === "womens%20clothing" ? (
        <Womens/>
       ) :
       <DefaultCategory/>}
      </div>
    );
  };
  
  export default Categories;