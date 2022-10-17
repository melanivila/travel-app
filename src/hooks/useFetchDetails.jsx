import React, { useEffect, useState } from "react";
import travelApi from "../api/travelApi";

export const useFetchDetails = ({ location, jsonParam }) => {
  const [loading, setLoading] = useState(true);
  const [placeDetails, setPlaceDetails] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [placesToVisit, setPlacesToVisit] = useState([]);

  useEffect(() => {
    setPlaceDetails([]);
    getPlaceDetails();
    getPlacesToVisit();
  }, []);

  const getPlaceDetails = async () => {
    setLoading((prev) => (prev = true));
    const res = await travelApi.get(
      `/${jsonParam}.json?id=${location}&fields=all`
    );
    const fetchedData = res.data.results[0];
    const fetchedCarousel = res.data.results[0].images.slice(0, 5);
    setPlaceDetails(fetchedData);
    setCarouselImages(fetchedCarousel);
    setLoading((prev) => (prev = false));
  };

  const getPlacesToVisit = async () => {
    const res = await travelApi.get(
      `/poi.json?location_id=${location}&fields=id,name,images,properties,snippet`
    );
    const fetchedData = res.data.results;
    setPlacesToVisit(fetchedData);
  };
  return [placeDetails, carouselImages, placesToVisit, loading];
};
