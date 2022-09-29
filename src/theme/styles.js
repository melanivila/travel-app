import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "./theme";

export const styles = StyleSheet.create({
  //Common styles
  commonBtn: {
    backgroundColor: COLORS.lightblue,
    width: 220,
    height: 50,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    color: COLORS.white,
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    fontWeight: 'bold',
  },
  inputTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  //Home Styles
  homeContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 70,
  },
  largeTitle: {
    color: COLORS.white,
    fontSize: SIZES.largeTitle,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
  // SingIn and Login Styles
  inputsContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 70,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius:  SIZES.radius,
    width: 260,
    height: 40,
    marginVertical: 10,
  }
});
