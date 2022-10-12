import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { CommonCard } from "./CommonCard";

export const CommonFlatList = ({ title, item, typePOI }) => {
  const navigation = useNavigation();

  let jsonParam = "location";

  if (typePOI) {
    jsonParam = "poi";
  }

  return (
    <View
      style={{
        height: title ? 260 : 220,
        marginTop: 20,
      }}
    >
      {title && <Text style={styles.subtitle}>{title}</Text>}
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", {
                location: item.id,
                jsonParam: jsonParam,
              })
            }
            activeOpacity={0.7}
          >
            <CommonCard item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
