import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

function ProductDetail({ product, addToCart, currentItem }) {
  console.log(currentItem);
  return (
    <div class="flex flex-row justify-center mt-44   ">
      <div class="flex flex-row   max-w-4xl h-96 m-auto justify-between	   bg-gray-300  ">
        <img class="m-10 max-w-sm" src={currentItem.ImageUrl} />
        <div class="flex flex-col text-center m-20 justify-between">
          <h1 class="text-2xl font-bold">{currentItem.name}</h1>
          <p1></p1>
          <h1 class="text-xl font-bold">$ {currentItem.price} </h1>
          <div>
            <button
              onClick={() => addToCart(currentItem.id)}
              class="text-xl font-bold w-44 h-10 rounded-xl bg-yellow-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
