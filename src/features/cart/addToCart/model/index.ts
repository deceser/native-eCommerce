// CartContext

import React from "react";

import { ProductDummyData } from "../../../../fake";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, setState] = React.useState({
    data: ProductDummyData,
    cart: [],
  });

  const addToCart = product => {
    setState({
      ...state,
      cart: state.cart.find(cartItem => cartItem.id === product.id)
        ? state.cart.map(cartItem =>
            cartItem.id === product.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });
  };
};

export const useCart = () => {
  return React.useContext(CartContext);
};
