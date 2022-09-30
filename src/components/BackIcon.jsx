import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const BackIcon = ({ name, size, color }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ top: 40, left: 20 }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
