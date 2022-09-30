import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { COLORS } from "../theme/theme";
import { styles } from "../theme/styles";
import { Input } from "../components/Input";
import { CommonBtn } from "../components/CommonBtn";
import useRandomBackground from "../hooks/useRandomBackground";

export const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
          <View style={styles.inputsContainer}>
            <Text style={styles.title}>TravelOn</Text>
            <View>
              <Input text="Email:" value={email} />
              <Input text="Password:" value={password} />
            </View>
            <View>
              <Text style={{ color: "red", marginBottom: 10 }}>
                Validations here
              </Text>
            </View>
            <View>
              <CommonBtn title="Log In" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
