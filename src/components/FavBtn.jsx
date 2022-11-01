import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../theme/theme";
import { useFirestore } from "../hooks/useFirestore";

function FavBtn({ favItem, jsonParam }) {
  const { addFavItem, isFavItem, checkFavExists } = useFirestore();

  useEffect(() => {
    checkFavExists(favItem);
  });

  return (
    <TouchableOpacity
      onPress={() => addFavItem(favItem, jsonParam)}
      style={{ position: "absolute", zIndex: 999, right: 5, top: 8 }}
    >
      <Ionicons
        name={isFavItem ? "heart-sharp" : "heart-outline"}
        size={30}
        color={COLORS.bluesky}
      />
    </TouchableOpacity>
  );
}

export default FavBtn;
