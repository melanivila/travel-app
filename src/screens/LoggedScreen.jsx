import React from "react";
import { ScrollView, View } from "react-native";
import { usePopularLocation } from "../hooks/usePopularLocation";
import { CommonFlatList } from "../components/CommonFlatList";
import { Header } from "../components/Header";
import { styles } from "../theme/styles";

export const LoggedScreen = () => {
  const {
    popularIslands,
    popularCountries,
    popularPlaces,
    popularReserves,
    popularCities,
  } = usePopularLocation();

  return (
    <>
      <Header title="Travel On" icon="heart-outline" />
      <ScrollView>
        <View style={styles.commonContainer}>
          <CommonFlatList title="Popular Cities" item={popularCities} />
          <CommonFlatList title="Popular Countries" item={popularCountries} />
          <CommonFlatList title="Popular Places" item={popularPlaces} />
          <CommonFlatList title="Popular Islands" item={popularIslands} />
          <CommonFlatList title="Popular Reserves" item={popularReserves} />
        </View>
      </ScrollView>
    </>
  );
};
