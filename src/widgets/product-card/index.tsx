import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";

import { AddToFavoriteButton } from "../../features/favorites/addToFavorites";

interface Props {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
}

const ProductCard: React.FC<Props> = ({ ...props }) => {
  const { productName, productPrice, productCategory, id } = props;
  const navigation = useNavigation();

  const goToProductScreen = (item: Props) => {
    navigation.navigate("Product", { product: item });
  };

  return (
    <TouchableOpacity onPress={() => goToProductScreen(props)}>
      <View style={styles.productCard}>
        <Image style={styles.productImage} />
        <View style={styles.favorite}>
          <AddToFavoriteButton item={props} />
        </View>
        <View>
          <Text>{productName}</Text>
          <Text>{productPrice} $</Text>
          <Text>{productCategory}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
