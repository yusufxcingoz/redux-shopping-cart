import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

function product({ product, addToCart, loadCurrentItem }) {
  return (
    <div class="flex  mx-5 border-2 flex-col justify-between items-center ">
      <div class=" w-44 p-5 mt-5 ">
        <img src={product.image} />
      </div>
      <div class="flex flex-col items-center text-center m-auto  ">
        <h1>{product.title}</h1>
        <p class="font-bold">{product.price}$</p>
        <div class="flex flex-col mt-10">
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
