import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import { useCart } from "../../features/cart/addToCart/model";

import Card from "../../widgets/card";

import { styles } from "./style";

const CartScreen: React.FC = () => {
  const { ...state } = useCart();

  return (
    <SafeAreaView>
      <View style={styles.cartScreen}>
        <FlatList
          data={state.cart}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              productName={item.productName}
              productPrice={item.productPrice}
              productAddedDate={item.productAddedDate}
              productCategory={item.productCategory}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
