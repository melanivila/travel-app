import React from "react";
import { TextInput, View } from "react-native";
import { CommonBtn } from "../components/CommonBtn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../theme/styles";

export const SearchScreen = () => {
  return (
    <View style={styles.basicContainer}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            //   value={textValue}
            //   onChangeText={setTextValue}
          />
          <Ionicons name="search-outline" color="grey" size={25} />
        </View>
      </View>
      <View style={{ bottom: 80 }}>
        <CommonBtn title="Search" />
      </View>
    </View>
  );
};
