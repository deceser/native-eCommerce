import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";

interface Props {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
}

const CartCard: React.FC<Props> = ({ ...props }) => {
  const { productName, productPrice, productCategory, id } = props;
  const navigation = useNavigation();

  const goToProductScreen = (item: Props) => {
    navigation.navigate("Product", { product: item });
  };

  return (
    <TouchableOpacity onPress={() => goToProductScreen(props)}>
      <View style={styles.cartCard}>
        <Image style={styles.productImage} />
        <View style={styles.prodictInfo}>
          <Text>{productName}</Text>
          <Text>{productCategory}</Text>
          <Text>{productPrice} $</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;
