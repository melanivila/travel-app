import { useEffect, useState } from "react";
import travelApi from "../api/travelApi";

export const useSearchData = ({ term, selectedOption }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    loadResults();
  }, [selectedOption, term]);

  const loadResults = async () => {
    try {
      setLoading(true);
      let url;
      if (selectedOption === "location") {
        url = `/location.json?annotate=trigram:${term}&trigram=%3E=0.5&count=10&fields=all`;
      }
      if (selectedOption === "poi") {
        url = `/poi.json?annotate=trigram:${term}&trigram=%3E=0.5&count=8&fields=all`;
      }
      const res = await travelApi.get(url);
      const fetchedData = res.data.results;

      setSearchResults(fetchedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, searchResults };
};
