import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../theme/theme";
import { useFirestore } from "../hooks/useFirestore";

function FavBtn({ favItem, jsonParam }) {
  const { addFavItem } = useFirestore();

  return (
    <TouchableOpacity
      onPress={() => addFavItem(favItem, jsonParam)}
      style={{ position: "absolute", zIndex: 999 }}
    >
      <Ionicons name="heart-outline" size={35} color={COLORS.bluesky} />
    </TouchableOpacity>
  );
}

export default FavBtn;
