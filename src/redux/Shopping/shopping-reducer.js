import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      name: "Awesome Ring",
      price: 20,
      id: "a789c",
      ImageUrl: "https://pngimg.com/uploads/ring/ring_PNG38.png",
    },
    {
      name: "Rubic Cube",
      price: 30,
      id: "a78asd9c",
      ImageUrl:
        "https://i.pinimg.com/originals/08/05/a8/0805a8f92d5f8a31a15587859b965264.png",
    },
  ], //id, title, description, price, image
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
