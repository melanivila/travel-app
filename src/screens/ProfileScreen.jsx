import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { ImgBackground } from "../components/ImgBackground";
import { ProfileCard } from "../components/ProfileCard";
import { UserContext } from "../context/UserContext";
import useRandomBackground from "../hooks/useRandomBackground";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../db/firebase";
import { screenWidth } from "../theme/theme";
import { useFirestore } from "../hooks/useFirestore";

export const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const { newUserName, getUsername } = useFirestore();

  useEffect(() => {
    getUsername();
  }, [newUserName]);

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
            username={newUserName}
          />
        </View>
      </ImgBackground>
    </>
  );
};
