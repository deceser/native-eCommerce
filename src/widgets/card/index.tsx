import React from "react";
import { Image, Text, View } from "react-native";

import { AddToCartButton } from "../../features/cart/addToCart";

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

  return (
    <View style={styles.ProductItem}>
      <Image style={styles.ProductImage} />
      <View>
        <Text>{productName}</Text>
        <Text>{productPrice} $</Text>
        <Text>{productCategory}</Text>
      </View>

      <View style={styles.ProductButton}>
        <AddToCartButton item={props} />
      </View>
    </View>
  );
};

export default Card;
