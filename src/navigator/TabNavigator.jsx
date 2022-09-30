import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SingInScreen } from "../screens/SignInScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, SIZES } from "../theme/theme";
import { SearchScreen } from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.lightblue,
        tabBarInactiveTintColor: COLORS.lightGray,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          backgroundColor: "black",
          height: 60,
          marginHorizontal: "5%",
          borderRadius: SIZES.radius,
          width: "90%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={SingInScreen} />
    </Tab.Navigator>
  );
}
