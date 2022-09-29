import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SingInScreen } from "../screens/SignInScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../theme/theme";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.lightblue,
        tabBarInactiveTintColor: COLORS.lightGray,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: 70,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SingInScreen} />
    </Tab.Navigator>
  );
}
