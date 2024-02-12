import React from "react";
import { Pressable } from "react-native";

import { useFavorite } from "../model";

import HeartSvg from "../../../../shared/icons/heart";

import { styles } from "./style";

interface Props {
  item: any;
  //need add item props
}

const AddToCartButton: React.FC<Props> = ({ ...props }) => {
  const { item } = props;
  const { addToFavorite, isFavorite } = useFavorite();
  // const isProductFavorite = isFavorite(item.id);

  return (
    <Pressable onPress={() => addToFavorite(item)}>
      <HeartSvg width={23} height={23} fill={isFavorite(item.id) ? "black" : "none"} stroke="black" />
    </Pressable>
  );
};

export default AddToCartButton;
