import React from "react";
import { Text, Pressable } from "react-native";

import { useCart } from "../model";

import { styles } from "./style";

interface Props {
  item: any;

  //need add item props
}

const AddToCartButton: React.FC<Props> = ({ ...props }) => {
  const { item } = props;
  const { addToCart } = useCart();

  return (
    <Pressable style={styles.button} onPress={() => addToCart(item)}>
      <Text style={styles.textButton}>Add to Cart</Text>
    </Pressable>
  );
};

export default AddToCartButton;
