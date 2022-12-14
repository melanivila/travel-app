import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../theme/styles";
import { COLORS, SIZES } from "../theme/theme";

export const CommonBtn = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.commonBtn}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>{title}</Text>
    </TouchableOpacity>
  );
};
