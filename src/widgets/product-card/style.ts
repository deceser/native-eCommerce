import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  default: {
    flex: 1,
    height: 250,
    width: 180,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    margin: 5,

    position: "relative",
  },

  productImage: {
    width: "100%",
    resizeMode: "cover",
  },

  productButton: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  favorite: {
    position: "absolute",
    top: 5,
    right: 5,
  },

  favoriteCard: {},
  cartCard: {},
});
