import React, { useContext } from "react";
import { View } from "react-native";
import { ImgBackground } from "../components/ImgBackground";
import { ProfileCard } from "../components/ProfileCard";
import { UserContext } from "../context/UserContext";
import useRandomBackground from "../hooks/useRandomBackground";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../db/firebase";
import { screenWidth } from "../theme/theme";

export const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser({ email: "" });
        deleteUserFromAsyncStorage("email");
      })
      .catch((err) => console.log(err));
  };

  const deleteUserFromAsyncStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  const { uri } = useRandomBackground();

  return (
    <>
      <ImgBackground uri={uri}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: screenWidth / 3,
          }}
        >
          <ProfileCard
            email={user.email}
            logOut={logOut}
          />
        </View>
      </ImgBackground>
    </>
  );
};
