import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ icon, title, subTitle, opacity }) => {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.loggedScreenHeader, opacity: opacity }}>
      <Image
        source={require("../assets/TempLogo.png")}
        style={{ width: 60, height: 60 }}
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
          {title}
        </Text>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
          {subTitle}
        </Text>
      </View>
      <TouchableOpacity>
        {
          <Ionicons
            name={icon}
            size={35}
            color="black"
            onPress={() => navigation.navigate("Fav")}
          />
        }
      </TouchableOpacity>
    </View>
  );
};
