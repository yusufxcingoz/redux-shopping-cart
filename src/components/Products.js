import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  connect,
  connectFunction,
  useDispatch,
  useSelector,
} from "react-redux";
import Product from "./products/product/Product";
import { serItems, setItem } from "../redux/Shopping/shopping-actions";
import axios from "axios";

function Products({ products }) {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setItem(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div class=" mt-10  mx-5 grid grid-flow-col grid-cols-4 grid-rows-5 gap-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
