import React from "react";
import { Link } from "react-router-dom";

function Products({ products }) {
  console.log(products);
  return (
    <div class=" mt-16 mx-10 bg-gray-300  w-48 text-center">
      <div class="flex flex-col justify-center p-5">
        <div class="w-32 h-32  p-5 ">
          <img src={products.ImageUrl} />
        </div>
        <div class="flex flex-col justify-center m-auto  ">
          <div></div>
          <h1>{products.name}</h1>
          <p>{products.price}$</p>
          <Link
            class="w-32 bg-blue-300 my-5 text-center"
            to={`/product/${products.Id}`}
          >
            View Product
          </Link>
          <button class="w-32 bg-yellow-500">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
