import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigator/StackNavigator";
import { UserContext } from "./src/context/UserContext";

export default function App() {
  const [user, setUser] = useState({ email: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </UserContext.Provider>
  );
}
