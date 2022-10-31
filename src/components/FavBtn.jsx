import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../theme/theme";
import { useFirestore } from "../hooks/useFirestore";

function FavBtn({ favItem, jsonParam }) {
  const [isPressed, setIsPressed] = useState(false);
  const { addFavItem } = useFirestore();

  const handleFav = () => {
    addFavItem(favItem, jsonParam);
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      onPress={handleFav}
      style={{ position: "absolute", zIndex: 999, right: 5, top: 8 }}
    >
      <Ionicons
        name={isPressed ? "heart-sharp" : "heart-outline"}
        size={30}
        color={COLORS.bluesky}
      />
    </TouchableOpacity>
  );
}

export default FavBtn;
