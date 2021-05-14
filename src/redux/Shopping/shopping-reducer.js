import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      name: "Awesome Ring",
      price: 20,
      Id: "a789c",
      ImageUrl: "https://pngimg.com/uploads/ring/ring_PNG38.png",
    },
    {
      name: "Rubic Cube",
      price: 30,
      Id: "a78asd9c",
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
      const item = state.products.find((prod) => prod.id === action.payload.id);

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
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
