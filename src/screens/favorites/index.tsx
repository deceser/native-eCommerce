import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import { useFavorite } from "../../features/favorites/addToFavorites/model";

import Card from "../../widgets/card";

import { styles } from "./style";

const FavoritesScreen: React.FC = () => {
  const { ...state } = useFavorite();

  return (
    <SafeAreaView>
      <View style={styles.favoritesScreen}>
        <FlatList
          data={state.favorite}
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

export default FavoritesScreen;
