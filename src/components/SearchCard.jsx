import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { COLORS, screenWidth, SIZES } from "../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFirestore } from "../hooks/useFirestore";

export const SearchCard = ({ item, deleteIcon }) => {
  const { deleteFav } = useFirestore();
  return (
    <View style={styles.searchCardContainer}>
      {deleteIcon && (
        <TouchableOpacity
          onPress={() => deleteFav(item.name)}
          style={{
            padding: 4,
            backgroundColor: "#08B9C5",
            borderTopLeftRadius: SIZES.radius,
            position: "absolute",
            zIndex: 999,
          }}
        >
          <Ionicons name="close-circle-outline" size={25} color="white" />
        </TouchableOpacity>
      )}
      <Image
        source={{
          uri:
            item.images?.length === 1
              ? item.images[0].source_url
              : item.images?.length > 2
              ? item.images[0].sizes.medium.url
              : item.images?.length === 0 &&
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
          {item.snippet.length > 80
            ? `${item.snippet.slice(0, 80)}...`
            : item.snippet}
        </Text>
      </View>
    </View>
  );
};
