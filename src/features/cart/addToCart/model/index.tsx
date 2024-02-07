// CartContext

import React, { createContext, useContext, useState } from "react";
import { ProductDummyData } from "../../../../fake";

interface Product {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
}

interface CartContextData {
  data: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  updateProductAmount: (itemId: string, amount: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartState, setCartState] = useState<{ data: Product[]; cart: Product[] }>({
    data: ProductDummyData,
    cart: [],
  });

  const addToCart = (item: Product) => {
    const foundItem = cartState.cart.find(e => e.id === item.id);

    if (foundItem) {
      const updatedCart = cartState.cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, productPrice: cartItem.productPrice + item.productPrice } : cartItem
      );
      setCartState(prevState => ({
        ...prevState,
        cart: updatedCart,
      }));
      console.log("This product was already in your cart, we updated the quantity!");
      console.log(item.productPrice + foundItem.productPrice);
      return;
    }

    setCartState(prevState => ({
      ...prevState,
      cart: [...prevState.cart, item],
    }));

    console.log("Product added to cart!");
  };

  const updateProductAmount = (itemId: string) => {
    const productExists = cartState.cart.some(cartProduct => cartProduct.id === itemId);

    if (!productExists) {
      console.error("Error in changing product quantity");
      return;
    }
  };

  return (
    <CartContext.Provider value={{ ...cartState, addToCart, updateProductAmount }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
