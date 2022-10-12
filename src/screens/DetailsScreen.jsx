import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { Header, Carousel, POIDetails, LocationDetails } from "../components";
import { styles } from "../theme/styles";
import { useFetchDetails } from "../hooks/useFetchDetails";

export const DetailsScreen = ({ route }) => {
  const { jsonParam, location } = route.params;

  const [placeDetails, carouselImages, placesToVisit] = useFetchDetails({
    jsonParam,
    location,
  });

  return (
    <>
      <Header
        title={placeDetails.name}
        subTitle={
          placeDetails.country_id && placeDetails.country_id?.replace("_", " ")
        }
        render
        icon="heart-outline"
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
            <POIDetails placeDetails={placeDetails} />
          ) : (
            <LocationDetails
              placesToVisit={placesToVisit}
              placeDetails={placeDetails}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};
