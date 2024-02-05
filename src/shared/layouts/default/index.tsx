import React from "react";
import { View, ViewProps } from "react-native";

import { styles } from "./style";

interface DefaultLayoutProps extends ViewProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, ...props }) => {
  const {} = props;
  return <View style={styles.defaultLayout}>{children}</View>;
};

export default DefaultLayout;
