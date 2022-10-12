import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../theme/styles";

export const CommonCard = ({ item }) => {
  return (
    <View style={styles.commonCardImgContainer}>
      <Image
        source={{
          uri:
            item.images.length === 1
              ? item.images[0].source_url
              : item.images.length > 2
              ? item.images[0].sizes.medium.url
              : "https://www.quicideportes.com/assets/images/custom/no-image.png",
        }}
        style={styles.commonCardImg}
        resizeMode="cover"
      />
      <View style={styles.commonCardContainer}>
        <Text style={styles.commonCardTitle}>
          {item.name.length > 20
            ? `${item.snippet.slice(0, 20)}...`
            : item.name}
        </Text>
        <Text style={styles.commonCardSnippet}>
          {item.snippet.length > 80
            ? `${item.snippet.slice(0, 80)}...`
            : item.snippet}
        </Text>
      </View>
    </View>
  );
};
