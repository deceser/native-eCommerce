import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./style";

const Header: React.FC = ({}) => {
  const navigation = useNavigation();

  const goToCart = () => {
    navigation.navigate("Cart" as never);
  };

  return (
    <View style={styles.Header}>
      <View>
        <Text>Logo</Text>
      </View>

      <TouchableOpacity onPress={goToCart}>
        <View>
          <Icon name="ios-person" size={30} color="#4F8EF7" />
          <Text style={styles.Counter}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
