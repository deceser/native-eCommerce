import React from "react";
import { Text, Pressable } from "react-native";

import { styles } from "./style";

interface Props {
  item: any;

  //need add item props
}

const AddToCartButton: React.FC<Props> = ({ ...props }) => {
  const { item } = props;

  return (
    <Pressable style={styles.button} onPress={() => console.log("facv")}>
      <Text style={styles.textButton}>Add to Cart</Text>
    </Pressable>
  );
};

export default AddToCartButton;
