import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartCard: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#DEDEDE",
    alignItems: "center",
    marginBottom: 5,
  },

  prodictInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: 5,
    padding: 10,
  },

  productImage: {
    borderColor: "red",
    borderWidth: 2,
    width: 150,
    height: "100%",
  },
});
