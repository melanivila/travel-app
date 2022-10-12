import React from "react";
import { Text } from "react-native";
import { styles } from "../theme/styles";
import { CommonFlatList } from "./CommonFlatList";

export const LocationDetails = ({ placesToVisit, placeDetails }) => {
  return (
    <>
      <Text style={styles.subtitle}>Overview</Text>
      <Text style={{ alignSelf: "flex-start" }}>
        {placeDetails.generated_intro}
      </Text>
      <CommonFlatList item={placesToVisit} title="Places to visit" typePOI />
    </>
  );
};
