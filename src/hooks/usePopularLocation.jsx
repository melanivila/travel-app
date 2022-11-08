import { useEffect, useState } from "react";
import travelApi from "../api/travelApi";

export const usePopularLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularLocation, setPopularLocation] = useState({
    popularPlaces: [],
    popularCities: [],
    popularCountries: [],
    popularReserves: [],
    popularIslands: [],
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    setIsLoading(true);
    const popularPlacesPromise = travelApi.get("/poi.json?");
    const popularCitiesPromise = travelApi.get(
      "/location.json?tag_labels=city"
    );
    const popularCountriesPromise = travelApi.get(
      "/location.json?tag_labels=country"
    );
    const popularReservesPromise = travelApi.get(
      "/location.json?tag_labels=national_park"
    );
    const popularIslandsPromise = travelApi.get(
      "/location.json?tag_labels=island"
    );

    const response = await Promise.all([
      popularPlacesPromise,
      popularCitiesPromise,
      popularCountriesPromise,
      popularReservesPromise,
      popularIslandsPromise,
    ]);

    setPopularLocation({
      popularPlaces: response[0].data.results,
      popularCities: response[1].data.results,
      popularCountries: response[2].data.results,
      popularReserves: response[3].data.results,
      popularIslands: response[4].data.results,
    });

    setIsLoading(false);
  };

  return {
    ...popularLocation,
    isLoading,
  };
};
