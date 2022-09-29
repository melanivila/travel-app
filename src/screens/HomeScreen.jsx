import React from "react";
import { ImageBackground, Text, View } from "react-native";
import backgroundImage from "../../assets/background-home.jpg";
import { CommonBtn } from "../components/CommonBtn";
import { styles } from "../theme/styles";
import { COLORS, SIZES } from "../theme/theme";

export const HomeScreen = () => {
  return (
    <>
      <ImageBackground
        source={backgroundImage}
        style={{ flex: 1 }}
        resizeMode="cover"
        blurRadius={3}
      >
        <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack3 }}>
          <View style={styles.homeContainer}>
            <Text style={{ color: COLORS.white }}>TravelOn</Text>
            <View>
              <Text style={styles.largeTitle}>EXPLORE BEAUTY OF JOURNEY</Text>
              <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}>
                Everything you can imagine is here
              </Text>
            </View>
            <View>
              <CommonBtn title="Sign in" />
              <Text style={{ color: COLORS.white, fontSize: SIZES.body3 }}>
                Do you have any account? Login
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
