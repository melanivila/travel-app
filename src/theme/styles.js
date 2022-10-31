import { StyleSheet } from "react-native";
import { COLORS, screenHeight, screenWidth, SIZES } from "./theme";

export const styles = StyleSheet.create({
  //Common styles
  basicContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 100,
  },
  commonContainer: {
    flex: 1,
    // marginTop: 30,
    marginLeft: 30,
    marginBottom: 100,
  },
  commonBtn: {
    backgroundColor: COLORS.bluesky,
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
    justifyContent: "space-evenly",
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
    paddingHorizontal: 10,
  },

  //SearchScreen
  searchBarContainer: {
    // top: 20,
    zIndex: 999,
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
    top: 25,
  },
  searchInput: {
    flex: 1,
    fontSize: SIZES.body3,
  },

  //SearchCard
  searchCardContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightblue,
    borderRadius: SIZES.radius,
    width: screenWidth - 40,
    height: 110,
    marginVertical: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },

  //HomeLoggedScreen
  loggedScreenHeader: {
    backgroundColor: "white",
    width: screenWidth,
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    zIndex: 999,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 10,
  },

  //ProfileScreen
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  profileCard: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: COLORS.lightGray,
    height: screenHeight * 0.48,
    width: screenWidth - 80,
    borderRadius: SIZES.radius,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 10,
  },
  deleteAccountBtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginHorizontal: 10,
  },
  modalBackground: {
    backgroundColor: COLORS.lightGray,
    top: 27,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    zIndex: 999,
    height: screenHeight * 0.48,
    width: screenWidth - 80,
    borderRadius: SIZES.radius,
    fontWeight: "bold",
    color: "red",
  },
  modalInput: {
    backgroundColor: COLORS.transparentWhite,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,
    elevation: 11,
  },

  //DetailsScreen
  detailsContainer: {
    flex: 1,
    top: 30,
    alignItems: "center",
    marginHorizontal: 40,
    marginBottom: 100,
  },
  carouselContainer: {
    position: "absolute",
    top: 0,
    width: screenWidth - 80,
    height: 50,
    backgroundColor: COLORS.transparentBlack3,
    borderTopStartRadius: SIZES.radius,
    borderTopEndRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselTitle: {
    color: COLORS.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: SIZES.body2,
    color: COLORS.bluesky,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 8,
    marginBottom: 8,
  },

  //POI Details
  tagLabel: {
    backgroundColor: COLORS.lightblue,
    padding: 6,
    borderRadius: SIZES.radius,
    margin: 5,
    marginTop: 20,
  },
  poiData: {
    width: screenWidth - 80,
    flexDirection: "row",
    marginVertical: 8,
    alignContent: "center",
  },

  //Carousel
  carouselShadow: {
    height: screenHeight * 0.48,
    width: screenWidth - 80,
    borderRadius: SIZES.radius,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,
    elevation: 6,
  },
  saveBtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.bluesky,
    marginHorizontal: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 10,
    marginBottom: 10,
  },
  carouselImgContainer: {
    height: screenHeight * 0.48,
    width: screenWidth - 80,
    borderRadius: SIZES.radius,
  },
  carouselImg: {
    height: screenHeight * 0.48,
    width: screenWidth - 80,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  pagination: {
    borderRadius: 3,
    marginHorizontal: 2,
    width: 35,
    height: 8,
  },

  //CommonCard
  commonCardImgContainer: {
    flexDirection: "row",
    borderRadius: SIZES.radius,
    backgroundColor: "white",
    height: 210,
    alignItems: "flex-end",
    marginRight: 30,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.49,
    elevation: 5,
  },
  commonCardImg: {
    width: 250,
    height: 210,
    borderRadius: SIZES.radius,
    position: "absolute",
  },
  commonCardContainer: {
    // top: 90,
    backgroundColor: COLORS.transparentBlack6,
    width: 250,
    alignItems: "center",
    height: 100,
    borderBottomStartRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  commonCardTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    bottom: 8,
  },
  commonCardSnippet: {
    color: "white",
    fontSize: 14,
    alignSelf: "flex-start",
  },
  // Validations
  validationText: {
    color: "#D2001A",
    fontWeight: "bold",
    fontSize: 14.5,
  },
});
