import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/styles";
import { Input } from "../components/Input";
import { CommonBtn } from "../components/CommonBtn";
import { BackIcon } from "../components/BackIcon";
import { ImgBackground } from "../components/ImgBackground";

export const SingInScreen = ({ route }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { uri } = route.params;

  return (
    <>
      <ImgBackground uri={uri}>
        <BackIcon
          // onPress={console.log("atras")}
          name="arrow-back-outline"
          size={45}
          color="white"
        />
        <View style={styles.inputsContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>TravelOn</Text>
          </View>
          <View>
            <Input text="Email:" value={email} />
            <Input text="Password:" value={password} />
            <Input text="Confirm Password:" value={confirmPassword} />
          </View>
          <View>
            <Text style={{ color: "red", marginBottom: 10 }}>
              Validations here
            </Text>
          </View>
          <View>
            <CommonBtn title="Sign in" />
          </View>
        </View>
      </ImgBackground>
    </>
  );
};
