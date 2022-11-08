import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../theme/theme";

export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator
        size={40}
        color={COLORS.bluesky}
        style={{ bottom: 20 }}
      />
    </View>
  );
};
