import React, { useState } from "react";
import { Image, Switch, Text, View } from "react-native";
import { CommonBtn } from "../components/CommonBtn";
import { SearchBar } from "../components/SearchBar";
import { styles } from "../theme/styles";
import { screenWidth, SIZES } from "../theme/theme";

export const SearchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.basicContainer}>
      <SearchBar />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: SIZES.radius,
          width: screenWidth - 40,
        }}
      >
        <Image
          source={{
            uri: "http://api-images-www.triposo.com/api/20220705/image/gAAAAABjNvLacbfn5BM0wOTOVN2gxRyPShWt1m9hX-YARRisspwqklmMwHfc6WfCSEPhRLhMOARImXgA7mziHuyqKpDBpxIGiFoJC1luxRAKyaHCpu62ueP9LVRum2hxjhvkP7bcFp00MlxkmAmneKHnn9VsXtBhFX3NrHn72eFsvo5rZ3c0GAxA5JgMjqKX2vYafnD0Iv_OVOnc2g-DBNgY1pqnzBLnkgpzFpqVtIJrfhTTHbcbv0zGhEyGP0a_RB2RHpJm1iZiuDOn_6dhDd3SQvilvX_3YQ==",
          }}
          style={{ width: 120, height: 100, borderRadius: SIZES.radius }}
          resizeMode="cover"
        />
        <View style={{ flexDirection: "column" }}>
          <Text>Paris - France</Text>
          <Text></Text>
        </View>
      </View>
      <View style={{ bottom: 80 }}>
        <CommonBtn title="Search" />
      </View>
    </View>
  );
};
