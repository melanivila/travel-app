import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../theme/styles";
import { Picker } from "@react-native-picker/picker";
import { COLORS, screenWidth, SIZES } from "../theme/theme";
import { useDebounceValue } from "../hooks/useDebounceValue";

export const SearchBar = ({ onDebounce, onValueChange }) => {
  const [textValue, setTextValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("location");
  const { debouncedValue } = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
    onValueChange(selectedOption);
  }, [debouncedValue]);

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <View
          style={{
            width: 110,
            height: 40,
            justifyContent: "center",
            borderRightWidth: 1,
            borderRightColor: COLORS.lightGray,
            right: 10,
          }}
        >
          <Picker
            selectedValue={selectedOption}
            onValueChange={setSelectedOption}
            style={{
              borderLeftColor: "black",
              borderLeftWidth: 1,
              width: 120,
              color: COLORS.gray,
            }}
            mode="dialog"
            dropdownIconColor={"rgba(255,255,255,0.8)"}
          >
            <Picker.Item
              label="Location"
              value="location"
              style={{ fontSize: SIZES.body4 }}
            />
            <Picker.Item
              label="Point of interest"
              value="poi"
              style={{ fontSize: SIZES.body4 }}
            />
          </Picker>
        </View>
        <View
          style={{ flexDirection: "row", width: screenWidth - 200, left: 10 }}
        >
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={textValue}
            onChangeText={setTextValue}
          />
          <Ionicons name="search-outline" color="grey" size={25} />
        </View>
      </View>
    </View>
  );
};
