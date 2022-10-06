import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../theme/styles";

export const Header = () => {
  return (
    <View style={styles.loguedScreenHeader}>
      <Image
        source={require("../assets/TempLogo.png")}
        style={{ width: 60, height: 60 }}
      />
      <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
        TravelOn
      </Text>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
};
