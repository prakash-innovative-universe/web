import { singleProduct } from "../../data";
import "./product.scss";
import Single from "../../components/single/Single";

export const Product = () => {

    //Fetch data and send to single component
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  );
};

export default Product;
