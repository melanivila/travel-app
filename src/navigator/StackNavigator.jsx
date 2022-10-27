import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  SingInScreen,
  LoginScreen,
  DetailsScreen,
  FavScreen,
  ForgotPasswordScreen,
} from "../screens";
import TabNavigator from "./TabNavigator";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { user, setUser } = useContext(UserContext);

  const getUserFromAsyncStorage = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("email");
      console.log(userEmail);
      return userEmail !== null
        ? setUser((prev) => ({ ...prev, email: userEmail }))
        : null;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserFromAsyncStorage();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user?.email ? (
        <>
          <Stack.Screen name="LoggedHome" component={TabNavigator} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Fav" component={FavScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SingInScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
