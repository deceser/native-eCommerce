/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Hello</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  );
}

export default App;
