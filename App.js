import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigator/TabNavigator";
// import { StyleSheet, Text, View } from "react-native";
// import { HomeScreen } from "./src/screens/HomeScreen";

// import { StatusBar } from "expo-status-bar";
// import { SingInScreen } from "./src/screens/SingInScreen";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
  // (
  //   <View style={styles.container}>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
