import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
  },

  counter: {
    position: "absolute",
    padding: 2,
    backgroundColor: "#FD0B0C",
    height: 13,
    width: 13,
    color: "#ffffff",
    fontSize: 8,
    textAlign: "center",
    borderRadius: 13,
  },
});
