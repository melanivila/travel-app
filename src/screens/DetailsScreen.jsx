import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import travelApi from "../api/travelApi";
import { Carousel } from "../components/Carousel";
import { styles } from "../theme/styles";
import { CommonFlatList } from "../components/CommonFlatList";

export const DetailsScreen = ({ route }) => {
  const [placeDetails, setPlaceDetails] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [placesToVisit, setPlacesToVisit] = useState([]);

  let location = "London";
  if (route.params) {
    location = route.params.location;
  }

  useEffect(() => {
    setPlaceDetails([]);
    getPlaceDetails();
    getPlacesToVisit();
  }, [location]);

  const getPlaceDetails = async () => {
    const res = await travelApi.get(`/location.json?id=${location}&fields=all`);
    const fetchedData = res.data.results[0];
    const fetchedCarousel = res.data.results[0].images.slice(0, 5);
    setPlaceDetails(fetchedData);
    setCarouselImages(fetchedCarousel);
  };

  const getPlacesToVisit = async () => {
    const res = await travelApi.get(
      `/poi.json?location_id=${location}&fields=id,name,images,properties,snippet`
    );
    const fetchedData = res.data.results;
    setPlacesToVisit(fetchedData);
  };

  return (
    <>
      <Header
        title={placeDetails.name}
        subTitle={placeDetails.country_id?.replace("_", " ")}
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
          <Text style={styles.subtitle}>Overview</Text>
          <Text style={{ alignSelf: "flex-start" }}>
            {placeDetails.generated_intro}
          </Text>
          <CommonFlatList item={placesToVisit} title="Places to visit" />
        </View>
      </ScrollView>
    </>
  );
};
