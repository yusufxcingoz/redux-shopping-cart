import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/Shopping/shopping-actions";

function CartItem({ item, removeFromCart, adjustQty }) {
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  return (
    <div>
      <div class="flex mx-5 border-2 flex-col items-center justify-center p-5 rounded-xl items-center">
        <div class="w-32 h-32  p-5 ">
          <img src={item.image} />
        </div>
        <div class="flex flex-col justify-center m-auto pt-8  ">
          <h1>{item.title}</h1>
          <p>{item.price}$</p>
          <Link to={`/product/${item.id}`}>
            <button class="w-32 bg-blue-300 my-5 text-center">
              View Product
            </button>
          </Link>
          <button
            class="w-32 bg-yellow-300 my-5 text-center"
            onClick={() => removeFromCart(item.id)}
          >
            Delete Item
          </button>
        </div>
        <div class="flex flex-row text-center ">
          <p class="mx-5 text-lg font-bold">Quantity:</p>
          <input
            class="p-1 rounded-xl"
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}
const mapDispacthToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispacthToProps)(CartItem);
