import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { Input } from "../components/Input";
import { CommonBtn } from "../components/CommonBtn";
import { BackIcon } from "../components/BackIcon";
import { ImgBackground } from "../components/ImgBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EyeIcon } from "../components/EyeIcon";
// import { useNavigation } from "@react-navigation/native";

export const LoginScreen = ({ route, navigation }) => {
  // const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isHidden, setIsHidden] = useState(true);

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
        <View style={styles.basicContainer}>
          <View style={styles.inputsContainer}>
            <View>
              <Input text="Email:" value={email} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Input text="Password:" value={password} visible={isHidden}/>
                <TouchableOpacity onPress={ () => setIsHidden(!isHidden) }>
                  <EyeIcon isHidden={ isHidden }/>
                  {/* <Ionicons
                    name= { isHidden ? "eye-outline" : "eye-off-outline" }
                    size={35}
                    color="white"
                    style={{ left: 10, top: 5 }}
                  /> */}
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ color: "red", marginBottom: 10 }}>
                Validations here
              </Text>
            </View>
          </View>
          {/* <View style={styles.basicContainer}> */}
          <CommonBtn
            title="Log In"
            onPress={() => navigation.navigate("LoggedHome")}
          />
        </View>
        {/* </View> */}
      </ImgBackground>
    </>
  );
};
