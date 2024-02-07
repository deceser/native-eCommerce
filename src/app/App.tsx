/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";

import Navigate from "./Navigations";
import { CartProvider } from "../features/cart/addToCart/model";

function App(): React.JSX.Element {
  return (
    <CartProvider>
      <StatusBar barStyle="default" />
      <Navigate />
    </CartProvider>
  );
}

export default App;
