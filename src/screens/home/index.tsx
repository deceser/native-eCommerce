import React from "react";
import { Text, View } from "react-native";

import DefaultLayout from "../../shared/layouts/default";

import Header from "../../widgets/header";

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Header />
      <DefaultLayout>
        <View>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
        </View>
      </DefaultLayout>
    </View>
  );
};

export default HomeScreen;
