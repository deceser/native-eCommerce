import React from "react";
import { Text, Pressable } from "react-native";

import { useFavorite } from "../model";

import { styles } from "./style";

interface Props {
  item: any;

  //need add item props
}

const AddToCartButton: React.FC<Props> = ({ ...props }) => {
  const { item } = props;
  const { addToFavorite } = useFavorite();

  return (
    <Pressable style={styles.button} onPress={() => addToFavorite(item)}>
      <Text style={styles.textButton}>Add to Favorite</Text>
    </Pressable>
  );
};

export default AddToCartButton;
