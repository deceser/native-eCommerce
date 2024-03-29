import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

const Header: React.FC = ({}) => {
  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate("Cart" as never);
  };

  return (
    <View style={styles.header}>
      <View>
        <Text>Logo</Text>
      </View>

      <TouchableOpacity onPress={goToCart}>
        <View>
          <Text>Cart</Text>
          <Text style={styles.counter}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
