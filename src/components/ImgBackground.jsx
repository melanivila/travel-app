import React from "react";
import { ImageBackground, View } from "react-native";
import { COLORS } from "../theme/theme";

export const ImgBackground = ({ uri, children }) => {
  return (
    <ImageBackground
      source={{
        uri: uri,
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
      blurRadius={3}
    >
      <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack3 }}>
        {children}
      </View>
    </ImageBackground>
  );
};
