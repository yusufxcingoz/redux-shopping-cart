import React from "react";
import { Link } from "react-router-dom";

function product({ product }) {
  return (
    <div class="flex mx-5 bg-gray-300 flex-col justify-center p-5">
      <div class="w-32 h-32  p-5 ">
        <img src={product.ImageUrl} />
      </div>
      <div class="flex flex-col justify-center m-auto  ">
        <h1>{product.name}</h1>
        <p>{product.price}$</p>
        <Link
          class="w-32 bg-blue-300 my-5 text-center"
          to={`/product/${product.Id}`}
        >
          View Product
        </Link>
        <button class="w-32 bg-yellow-500">Add To Cart</button>
      </div>
    </div>
  );
}

export default product;
