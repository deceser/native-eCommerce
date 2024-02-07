import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import { useCart } from "../../features/cart/addToCart/model";

import Card from "../../widgets/card";

import { styles } from "./style";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { ...state } = useCart();

  const goToCardId = (id: any) => {
    console.log(id);
    // navigation.navigate("Cart" as never);
  };
  return (
    <SafeAreaView>
      <View style={styles.homeScreen}>
        <FlatList
          data={state.cart}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToCardId(item.id)}>
              <Card
                id={item.id}
                productName={item.productName}
                productPrice={item.productPrice}
                productAddedDate={item.productAddedDate}
                productCategory={item.productCategory}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
