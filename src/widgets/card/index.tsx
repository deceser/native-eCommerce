import React from "react";
import { Image, Text, View } from "react-native";

import Button from "../../shared/button";

import { styles } from "./style";

interface Props {
  id: string;
  productName: string;
  productPrice: string;
  productAddedDate?: string;
  productCategory: string;
}

const Card: React.FC<Props> = ({ ...props }) => {
  const { productName, productPrice, productCategory } = props;

  return (
    <View style={styles.ProductItem}>
      <Image style={styles.ProductImage} />
      <View>
        <Text>{productName}</Text>
        <Text>{productPrice} $</Text>
        <Text>{productCategory}</Text>
      </View>

      <View style={styles.ProductButton}>
        <Button onPress={() => console.log("cart")}>Add to Cart</Button>
        <Button onPress={() => console.log("favorite")}>Add to Favorite</Button>
      </View>
    </View>
  );
};

export default Card;
