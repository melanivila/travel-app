import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, SingInScreen, LoginScreen, DetailsScreen } from "../screens";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SingInScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logged" component={TabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
