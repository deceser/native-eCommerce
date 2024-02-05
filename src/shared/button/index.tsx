import React from "react";
import { Text, Pressable } from "react-native";

import { styles } from "./style";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  const { onPress } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{children}</Text>
    </Pressable>
  );
};

export default Button;
