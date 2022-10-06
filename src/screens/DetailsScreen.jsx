import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { screenWidth, screenHeight, SIZES } from "../theme/theme";
// import { usePopularLocation } from "../hooks/usePopularLocation";
import { Header } from "../components/Header";
// import axios from "axios";
import travelApi from "../api/travelApi";

export const DetailsScreen = ({ route }) => {
  // const { popularCities } = usePopularLocation();
  const [placeDetails, setPlaceDetails] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  const { location } = route.params;
  console.log(location);
  // const location = "London";

  useEffect(() => {
    setPlaceDetails([]);
    getPlaceDetails();
  }, [location]);

  const getPlaceDetails = async () => {
    const res = await travelApi.get(`/location.json?id=${location}`);
    const fetchedData = res.data.results;
    const fetchedCarousel = res.data.results[0].images.slice(0, 4);
    // console.log(fetchedData);
    // console.log(carouselImages);
    setPlaceDetails(fetchedData);
    setCarouselImages(fetchedCarousel);
  };

  return (
    <>
      <Header />
      <View style={{ flex: 1, top: 60, alignItems: "center" }}>
        <View
          style={{
            height: screenHeight * 0.48,
            width: screenWidth - 80,
            borderRadius: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.9,
            shadowRadius: 7.49,
            elevation: 10,
          }}
        >
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            data={carouselImages}
            renderItem={({ item }) => (
              <>
                <View
                  style={{
                    height: screenHeight * 0.48,
                    width: screenWidth - 80,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Image
                    style={{
                      height: screenHeight * 0.48,
                      width: screenWidth - 80,
                      borderRadius: SIZES.radius,
                    }}
                    source={{ uri: item.sizes.medium.url }}
                    resizeMode="cover"
                  />
                </View>
              </>
            )}
            showPagination
          />
        </View>
      </View>
    </>
  );
};
