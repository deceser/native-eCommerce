import React from "react";
import { Image, Text, View } from "react-native";

import { useCart } from "../../features/cart/addToCart/model";

import Button from "../../shared/button";

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
  const { addToCart } = useCart();

  return (
    <View style={styles.ProductItem}>
      <Image style={styles.ProductImage} />
      <View>
        <Text>{productName}</Text>
        <Text>{productPrice} $</Text>
        <Text>{productCategory}</Text>
      </View>

      <View style={styles.ProductButton}>
        <Button onPress={() => addToCart(props)}>Add to Cart</Button>
        <Button onPress={() => console.log("favorite")}>Add to Favorite</Button>
      </View>
    </View>
  );
};

export default Card;
