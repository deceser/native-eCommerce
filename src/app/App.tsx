/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";

import Navigate from "./Navigations";

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="default" />
      <Navigate />
    </>
  );
}

export default App;
