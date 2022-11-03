import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { COLORS } from "../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UserModal } from "./UserModal";
import { useNavigation } from "@react-navigation/native";

export const ProfileCard = ({ email, logOut }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.profileCard}>
      <TouchableOpacity
        onPress={logOut}
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <Text>Log out</Text>
        <Ionicons name="log-out-outline" size={25} color="#525252" />
      </TouchableOpacity>
      <View style={{ right: 15 }}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={styles.profileText}>Add/Change username</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Ionicons name="create-outline" size={25} color="#525252" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <Text style={styles.profileText}>Email:</Text>
          <Text style={{ fontSize: 15 }}>{email}</Text>
        </View>
      </View>

      {modalVisible && (
        <View>
          <UserModal setModalVisible={setModalVisible} modalVisible />
        </View>
      )}

      <TouchableOpacity>
        <Ionicons
          name="heart-outline"
          size={35}
          color={COLORS.bluesky}
          onPress={() => navigation.navigate("Fav")}
        />
      </TouchableOpacity>

      <View>
        <TouchableOpacity>
          <Text style={styles.deleteAccountBtn}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
