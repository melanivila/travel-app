import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { FavScreen } from "../screens/FavScreen";

export const Header = ({ icon, title, subTitle, opacity, render }) => {

  const navigation = useNavigation();

  return (
    <View style={{...styles.loguedScreenHeader, opacity: opacity}}>
      {
        render
        ? 
        <TouchableOpacity>
            {<Ionicons name="chevron-back-outline" size={35} color="black" onPress={ () => navigation.goBack() }/>}
          </TouchableOpacity>
        : 
        <Image
        source={require("../assets/TempLogo.png")}
        style={{ width: 60, height: 60 }}/>
      }
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            {title}
          </Text>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            {subTitle}
          </Text>
        </View>
      <TouchableOpacity>
        {<Ionicons name={icon} size={35} color="black" onPress={ () => navigation.navigate('Fav') }/>}
      </TouchableOpacity>
    </View>
  );
};
