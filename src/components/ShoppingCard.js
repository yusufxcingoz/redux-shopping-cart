import React, { useState, useEffect } from "react";
import Products from "./Products";
import { connect, connectFunction } from "react-redux";
import CartItem from "./CartItem";

function ShoppinCard({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div class=" mt-10  mx-5 flex flex-row items-center justify-between">
      <div class="grid grid-flow-col grid-cols-2 grid-rows-3 gap-4">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div class="flex flex-col text-center bg-gray-300 justify-between w-96 h-72 p-10 rounded-xl mx-16 ">
        <h1 class="text-xl font-bold">Purchase Summary</h1>
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total Items ({totalItems}) Items</p>
          <p1 class="text-lg">{totalPrice}$</p1>
        </div>
        <button class="bg-yellow-300 p-2">Proceed To Checkout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(ShoppinCard);
