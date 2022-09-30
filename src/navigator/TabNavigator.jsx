import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, SIZES } from "../theme/theme";
import { SearchScreen, DetailsScreen, LoginScreen } from "../screens";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Details") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        // tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.lightblue,
        tabBarInactiveTintColor: COLORS.lightGray,
        headerShown: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          backgroundColor: COLORS.black,
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
      <Tab.Screen name="Profile" component={LoginScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      {/* <Tab.Screen name="Profile" component={DetailsScreen} /> */}
    </Tab.Navigator>
  );
}
