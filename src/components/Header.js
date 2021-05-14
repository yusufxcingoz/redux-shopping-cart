import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="flex justify-between items-center h-16 mt-0 px-16 bg-gray-500">
      <div class=" ">
        <Link to="/">Home</Link>
      </div>
      <div>
        <h1>Shopping Card With Redux</h1>
      </div>
      <div class=" flex">
        <Link to="/shoppingcard">Card</Link>
        <div class="mx-2">
          <h1>0$</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
