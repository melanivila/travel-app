import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export const EyeIcon = ({ isHidden }) => {
  return (
    <Ionicons
      name={isHidden ? "eye-outline" : "eye-off-outline"}
      size={25}
      color="black"
      style={{ top: 8 }}
    />
  );
};
