import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

function product({ product, addToCart, loadCurrentItem }) {
  return (
    <div class="flex mx-5 bg-gray-300 flex-col justify-center p-5">
      <div class="w-32 h-32  p-5 ">
        <img src={product.ImageUrl} />
      </div>
      <div class="flex flex-col justify-center m-auto  ">
        <h1>{product.name}</h1>
        <p>{product.price}$</p>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            class="w-32 bg-blue-300 my-5 text-center"
          >
            View Product
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          class="w-32 bg-yellow-500"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

const mapDispacthToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (id) => dispatch(loadCurrentItem(id)),
  };
};

export default connect(null, mapDispacthToProps)(product);
