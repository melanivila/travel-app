import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { COLORS } from "../theme/theme";
import { styles } from "../theme/styles";
import { Input } from "../components/Input";
import { CommonBtn } from "../components/CommonBtn";
import useRandomBackground from "../hooks/useRandomBackground";
import { BackIcon } from "../components/BackIcon";

export const SingInScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
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
          <BackIcon
            onPress={ console.log( 'atras' ) }
            name= 'arrow-back-outline'
            size={ 45 }
            color= 'white'
          />
          <View style={styles.inputsContainer}>
            <View style={{ flexDirection: "row"}}>
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
        </View>
      </ImageBackground>
    </>
  );
};
