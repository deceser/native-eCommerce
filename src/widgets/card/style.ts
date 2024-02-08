import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ProductItem: {
    flex: 1,
    height: 250,
    width: 180,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    margin: 5,
  },

  ProductImage: {
    width: "100%",
    resizeMode: "cover",

    borderWidth: 1,
    borderColor: "blue",
  },

  ProductButton: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
});
