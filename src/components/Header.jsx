import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ icon, title, subTitle, opacity, render }) => {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.loggedScreenHeader, opacity: opacity }}>
      {render ? (
        <TouchableOpacity style={{ flex: 1 }}>
          {
            <Ionicons
              name="chevron-back-outline"
              size={35}
              color="black"
              onPress={() => navigation.navigate("LoggedHome")}
            />
          }
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/TempLogo.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
      )}
      <View style={{ alignItems: "center", justifyContent: "center", flex: 4 }}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        {subTitle && (
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            {subTitle}
          </Text>
        )}
      </View>

      <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
        <Ionicons
          name={icon}
          size={35}
          color="black"
          onPress={() => navigation.navigate("Fav")}
        />
      </TouchableOpacity>
    </View>
  );
};
