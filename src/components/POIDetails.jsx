import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "../theme/styles";
import { COLORS } from "../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export const POIDetails = ({ placeDetails }) => {
  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        horizontal
        data={placeDetails.tag_labels?.slice(0, 4)}
        renderItem={({ item }) => (
          <View style={styles.tagLabel}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <Text style={styles.subtitle}>Overview</Text>
      <Text style={{ alignSelf: "flex-start" }}>
        {placeDetails.generated_intro}
      </Text>
      <Text style={styles.subtitle}>More information</Text>
      {placeDetails?.properties?.map(
        (item) =>
          (item.key === "phone" ||
            item.key === "address" ||
            item.key === "website") && (
            <View style={styles.poiData} key={item.key}>
              <Ionicons
                name={
                  item.key === "phone"
                    ? "call-outline"
                    : item.key === "address"
                    ? "compass-outline"
                    : item.key === "website"
                    ? "globe-outline"
                    : null
                }
                size={20}
                color={COLORS.bluesky}
              />
              <Text style={{ marginLeft: 10 }}>{item.value}</Text>
            </View>
          )
      )}
    </>
  );
};
