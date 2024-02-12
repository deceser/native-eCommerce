import React from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";

import { useFavorite } from "../../features/favorites/addToFavorites/model";

import Card from "../../widgets/product-card";

import { styles } from "./style";

const FavoritesScreen: React.FC = () => {
  const { ...state } = useFavorite();

  return (
    <SafeAreaView>
      <View style={styles.favoritesScreen}>
        <Text>FAVORITE</Text>
        <FlatList
          data={state.favorite}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card
              card="default"
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

export default FavoritesScreen;
