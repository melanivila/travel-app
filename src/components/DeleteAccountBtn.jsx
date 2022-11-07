import React, { useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import { auth, firestore } from "../db/firebase";
import { styles } from "../theme/styles";

export const DeleteAccountBtn = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const reauthenticateUser = () => {
    if (!visible) {
      setVisible(true);
    } else {
      let user = auth.currentUser;

      let credential = EmailAuthProvider.credential(user.email, password);

      reauthenticateWithCredential(user, credential)
        .then(() => {
          Alert.alert(
            "Delete account",
            "Are you sure you wanna delete your account?",
            [
              {
                text: "No",
                onPress: () => {
                  setVisible(false);
                  navigation.navigate("Home");
                },
              },
              { text: "Yes", onPress: () => handleDelete() },
            ]
          );
        })
        .catch((error) => {
          if ((error = "auth/wrong-password")) {
            Alert.alert("Error", "Wrong password");
          } else {
            Alert.alert("Error", "Something went wrong, try again later");
          }
        });
    }
  };

  const handleDelete = () => {
    const { uid, email } = auth.currentUser;
    AsyncStorage.removeItem("email");
    auth.currentUser
      .delete(uid)
      .then(() => {
        deleteDoc(doc(firestore, "users", email));
        setUser("");
        Alert.alert("See you soon!", "Your account has been deleted");
      })
      .catch((error) => {
        console.log("Error deleting user:", error);
      });
  };

  return (
    <View
      style={{ justifyContent: "center", height: 80, alignItems: "center" }}
    >
      {visible && (
        <TextInput
          placeholder="Write your password to confirm..."
          style={{ ...styles.input, backgroundColor: "white" }}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      )}
      <TouchableOpacity onPress={reauthenticateUser}>
        <Text style={styles.deleteAccountBtn}> Delete Account </Text>
      </TouchableOpacity>
    </View>
  );
};
