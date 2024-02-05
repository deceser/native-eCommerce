import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";

import Card from "../../widgets/card";
import Header from "../../widgets/header";

import DefaultLayout from "../../shared/layouts/default";
import { ProductDummyData } from "../../fake";

import { styles } from "./style";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const goToCardId = (id: any) => {
    console.log(id);
    // navigation.navigate("Cart" as never);
  };
  return (
    <SafeAreaView>
      <TextInput placeholder="Search" />

      <View style={styles.homeScreen}>
        <FlatList
          data={ProductDummyData}
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
