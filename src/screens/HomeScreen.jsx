import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { CommonBtn } from "../components/CommonBtn";
import useRandomBackground from "../hooks/useRandomBackground";
import { styles } from "../theme/styles";
import { COLORS, SIZES } from "../theme/theme";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const { uri } = useRandomBackground();

  return (
    <>
      <ImageBackground
        source={{
          uri: uri,
        }}
        style={{ flex: 1 }}
        resizeMode="cover"
        blurRadius={3}
      >
        <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack3 }}>
          <View style={styles.homeContainer}>
            <Text style={styles.textDecorationLine}>TravelOn</Text>
            <View>
              <Text style={styles.largeTitle}>EXPLORE BEAUTY OF JOURNEY</Text>
              <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}>
                Everything you can imagine is here
              </Text>
            </View>
            <View>
              <CommonBtn
                title="Sign in"
                onPress={() => navigation.navigate("SignIn")}
              />
              <Text style={{ color: COLORS.white, fontSize: SIZES.body3 }}>
                Do you have any account?{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightblue,
                    textDecorationLine: "underline",
                  }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
