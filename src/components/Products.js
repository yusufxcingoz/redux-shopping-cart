import React from "react";
import { Link } from "react-router-dom";
import { connect, connectFunction } from "react-redux";
import Product from "./products/product/Product";

function Products({ products }) {
  return (
    <div class=" mt-10  mx-5 flex flex-row items-center">
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
