import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = ({ id }) => {
  return (
    <div className="pl" id={id}>
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. </h1>
        <p className="pl-desc">
          Découvrai mes dernieres creations en dates des sites web et application fais sur mesure
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
