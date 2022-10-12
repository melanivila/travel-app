import React from "react";
import { Text, View } from "react-native";
import { CommonBtn } from "../components/CommonBtn";
import { ImgBackground } from "../components/ImgBackground";
import useRandomBackground from "../hooks/useRandomBackground";
import { styles } from "../theme/styles";
import { COLORS, SIZES } from "../theme/theme";

export const HomeScreen = ({ navigation }) => {
  const { uri } = useRandomBackground();

  return (
    <>
      <ImgBackground uri={uri}>
        <View style={styles.homeContainer}>
          <Text style={styles.title}>TravelOn</Text>
          <View>
            <Text style={styles.largeTitle}>EXPLORE BEAUTY OF JOURNEY</Text>
            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}>
              Everything you can imagine is here
            </Text>
          </View>
          <View>
            <CommonBtn
              title="Sign in"
              onPress={() => navigation.navigate("SignIn", { uri })}
            />
            <Text style={{ color: COLORS.white, fontSize: SIZES.body3 }}>
              Do you have any account?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.bluesky,
                  textDecorationLine: "underline",
                }}
                onPress={() => navigation.navigate("Login", { uri })}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ImgBackground>
    </>
  );
};
