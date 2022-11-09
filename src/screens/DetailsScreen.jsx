import React from "react";
import { ScrollView, Text, View } from "react-native";
import {
  Header,
  Carousel,
  POIDetails,
  LocationDetails,
  Loading,
  FavBtn,
} from "../components";
import { styles } from "../theme/styles";
import { useFetchDetails } from "../hooks/useFetchDetails";
import { SIZES } from "../theme/theme";

export const DetailsScreen = ({ route }) => {
  const { jsonParam, location } = route.params;

  const [placeDetails, carouselImages, placesToVisit, loading] =
    useFetchDetails({
      jsonParam,
      location,
    });

  if (loading) return <Loading />;

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
          <FavBtn favItem={placeDetails} jsonParam={jsonParam} />
          <Carousel carouselImages={carouselImages}>
            <View style={styles.carouselContainer}>
              <Text
                style={{
                  ...styles.carouselTitle,
                  fontSize:
                    placeDetails.name?.length > 15 ? SIZES.body3 : SIZES.h1,
                }}
                numberOfLines={1}
              >
                {placeDetails.name}
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
