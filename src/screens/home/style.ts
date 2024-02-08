import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeScreen: {
    height: "96%",
    // ===========

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "red",
  },

  input: {
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(128, 128, 128, 0.5)",
  },
});
