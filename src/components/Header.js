import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div class="flex sticky top-0 w-max-full justify-between items-center h-16 mt-0 px-16 bg-gray-500">
      <div class=" ">
        <Link to="/">Home</Link>
      </div>
      <div>
        <h1>Shopping Card With Redux</h1>
      </div>
      <div class=" flex">
        <Link to="/shoppingcard">Card</Link>
        <div class="mx-2">
          <h1>{cartCount}</h1>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
