import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AddToCartButton } from "../../features/cart/addToCart";
import { AddToFavoriteButton } from "../../features/favorites/addToFavorites";

import { styles } from "./style";

interface Props {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
}

const Card: React.FC<Props> = ({ ...props }) => {
  const { productName, productPrice, productCategory, id } = props;
  const navigation = useNavigation();

  const goToProductScreen = (item: Props) => {
    navigation.navigate("Product", { product: item });
  };

  return (
    <TouchableOpacity onPress={() => goToProductScreen(props)}>
      <View style={styles.ProductItem}>
        <Image style={styles.ProductImage} />
        <View>
          <Text>{productName}</Text>
          <Text>{productPrice} $</Text>
          <Text>{productCategory}</Text>
        </View>

        <View style={styles.ProductButton}>
          <AddToCartButton item={props} />
          <AddToFavoriteButton item={props} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
