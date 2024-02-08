/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";

import Navigate from "./Navigations";

import { CombinedProvider } from "./store";

function App(): React.JSX.Element {
  return (
    <CombinedProvider>
      <StatusBar barStyle="default" />
      <Navigate />
    </CombinedProvider>
  );
}

export default App;
