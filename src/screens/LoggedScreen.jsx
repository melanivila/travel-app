import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { usePopularLocation } from "../hooks/usePopularLocation";
import { CommonFlatList } from "../components/CommonFlatList";
import { Header } from "../components/Header";
import { styles } from "../theme/styles";
import { useFirestore } from "../hooks/useFirestore";
import { COLORS, SIZES } from "../theme/theme";

export const LoggedScreen = () => {
  const { getUsername, newUserName } = useFirestore();
  const {
    popularIslands,
    popularCountries,
    popularPlaces,
    popularReserves,
    popularCities,
  } = usePopularLocation();

  useEffect(() => {
    getUsername();
    console.log(newUserName);
  }, [newUserName]);

  return (
    <>
      <Header title="Home" icon="heart-outline" />
      <ScrollView>
        <View style={styles.commonContainer}>
          {newUserName ? (
            <Text style={{ fontWeight: "bold", top: 15, fontSize: SIZES.h3 }}>
              Welcome,{" "}
              <Text style={{ color: COLORS.bluesky }}>{newUserName}</Text>
            </Text>
          ) : (
            <Text style={{ fontWeight: "bold", top: 15, fontSize: SIZES.h3 }}>
              Welcome!
            </Text>
          )}
          <CommonFlatList title="Popular Cities" item={popularCities} />
          <CommonFlatList title="Popular Countries" item={popularCountries} />
          <CommonFlatList title="Popular Places" item={popularPlaces} typePOI />
          <CommonFlatList title="Popular Islands" item={popularIslands} />
          <CommonFlatList title="Popular Reserves" item={popularReserves} />
        </View>
      </ScrollView>
    </>
  );
};
