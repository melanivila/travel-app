import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../theme/styles";
import { COLORS, screenWidth, SIZES } from "../theme/theme";

export const SearchCard = ({ item }) => {
  return (
    <View style={styles.searchCardContainer}>
      <Image
        source={{
          uri:
            item.images.length === 1
              ? item.images[0].source_url
              : item.images.length > 2
              ? item.images[0].sizes.medium.url
              : item.images.length === 0 &&
                "https://www.quicideportes.com/assets/images/custom/no-image.png",
        }}
        style={{
          width: 120,
          borderTopLeftRadius: SIZES.radius,
          borderBottomLeftRadius: SIZES.radius,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          flexDirection: "column",
          width: screenWidth - 170,
          padding: 10,
        }}
      >
        <Text style={{ color: COLORS.bluesky, fontWeight: "bold", bottom: 4 }}>
          {item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}
        </Text>
        <Text>
          {item.snippet.length > 100
            ? `${item.snippet.slice(0, 100)}...`
            : item.snippet}
        </Text>
      </View>
    </View>
  );
};
