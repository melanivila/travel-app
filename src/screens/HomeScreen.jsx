import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import backgroundImage from "../../assets/background-home.jpg";
import { CommonBtn } from "../components/CommonBtn";
import { styles } from "../theme/styles";
import { COLORS, SIZES } from "../theme/theme";

export const HomeScreen = () => {
  const [uri, setUri] = useState(
    "https://media.tenor.com/b1YK8dNH7GMAAAAd/bird-plane.gif"
  );

  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 10);
    getRandomBackground(newRandomNumber);
  }, []);

  const getRandomBackground = async (number) => {
    const randomBackground = await axios.get(
      "https://www.triposo.com/api/20220705/location.json?account=TWJJT5GS&token=4adavfcfoda6070lym6mdp3k00vgwuab&count=10"
    );
    const newUri =
      randomBackground.data.results[number].images[0].sizes.original.url;

    setUri(newUri);
  };

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
