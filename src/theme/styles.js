import { StyleSheet } from "react-native";
import { COLORS, screenWidth, SIZES } from "./theme";

export const styles = StyleSheet.create({
  //Common styles
  basicContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 100,
  },
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
    fontSize: SIZES.h3,
    fontWeight: "bold",
  },
  inputTitle: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontWeight: "bold",
  },
  //Home Styles
  homeContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 70,
    bottom: 20,
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
    borderRadius: SIZES.radius,
    width: 260,
    height: 40,
    marginVertical: 10,
  },
  //SearchScreen
  searchBarContainer: {
    marginVertical: 15,
    // position: "absolute",
    width: screenWidth - 30,
    marginHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: COLORS.transparentWhite,
    borderRadius: 50,
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    top: 35,
  },
  searchInput: {
    flex: 1,
    fontSize: SIZES.body3,
  },
  loguedScreenHeader: {
    backgroundColor: "white",
    top: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
<<<<<<< HEAD
      width: 0,
      height: 6,
=======
        width: 0,
        height: 20,
>>>>>>> 5bee1a88294d5d772724755d6a985003e6a585ee
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 10,
  },
});
