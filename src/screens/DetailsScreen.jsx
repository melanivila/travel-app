import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../theme/styles";
import { CommonFlatList } from "../components/CommonFlatList";
import { useFetchDetails } from "../hooks/useFetchDetails";
import { COLORS, screenWidth, SIZES } from "../theme/theme";

export const DetailsScreen = ({ route }) => {
  const { jsonParam, location } = route.params;

  const [placeDetails, carouselImages, placesToVisit] = useFetchDetails({
    jsonParam,
    location,
  });

  const tags = placeDetails.tag_labels?.slice(0, 4);

  console.log(tags);

  return (
    <>
      <Header
        title={placeDetails.name}
        subTitle={placeDetails.country_id?.replace("_", " ")}
        render
      />
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Carousel carouselImages={carouselImages}>
            <View style={styles.carouselContainer}>
              <Text style={styles.carouselTitle}>
                {placeDetails.name?.length > 13
                  ? `${placeDetails.name.slice(0, 13)}...`
                  : placeDetails.name}
              </Text>
            </View>
          </Carousel>
          {jsonParam === "poi" ? (
            <>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={placeDetails.tag_labels?.slice(0, 4)}
                renderItem={({ item }) => (
                  <View
                    style={{
                      backgroundColor: COLORS.lightblue,
                      padding: 6,
                      borderRadius: SIZES.radius,
                      margin: 5,
                      marginTop: 20,
                    }}
                  >
                    <Text>{item}</Text>
                  </View>
                )}
              />
              <Text style={styles.subtitle}>Overview</Text>
              <Text style={{ alignSelf: "flex-start" }}>
                {placeDetails.generated_intro}
              </Text>
              <Text style={styles.subtitle}>More information</Text>
              <View
                style={{
                  width: screenWidth,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Ionicons
                    name="globe-outline"
                    size={25}
                    color={COLORS.black}
                  />
                  <Text>Phone</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Ionicons
                    name="call-outline"
                    size={25}
                    color={COLORS.black}
                  />
                  <Text>Phone</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Ionicons
                    name="compass-outline"
                    size={25}
                    color={COLORS.black}
                  />
                  <Text>Phone</Text>
                </View>
              </View>
            </>
          ) : (
            <CommonFlatList item={placesToVisit} title="Places to visit" />
          )}
        </View>
      </ScrollView>
    </>
  );
};
