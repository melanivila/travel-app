import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../theme/theme";

export const Header = ({ icon, title, subTitle, render }) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar hidden />
      <View style={styles.loggedScreenHeader}>
        {render ? (
          <TouchableOpacity style={{ flex: 1.5 }}>
            <Ionicons
              name="chevron-back-outline"
              size={35}
              color="black"
              onPress={() => navigation.navigate("LoggedHome")}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ flex: 1.5, justifyContent: "center" }}>
            <Image
              source={require("../assets/logoTravelOn.png")}
              style={{ width: 60, height: 60 }}
              tintColor={COLORS.lightblue}
            />
            <Text
              style={{
                position: "absolute",
                color: COLORS.black,
                // fontSize: SIZES.h3,
                // fontWeight: "bold",
              }}
            >
              TravelOn
            </Text>
          </View>
        )}
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 4 }}
        >
          <Text
            style={{
              color: "black",
              fontSize: SIZES.h3,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
          {subTitle && <Text>{subTitle}</Text>}
        </View>

        <TouchableOpacity style={{ flex: 1.5, alignItems: "flex-end" }}>
          <Ionicons
            name={icon}
            size={35}
            color="black"
            onPress={() => navigation.navigate("Fav")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
