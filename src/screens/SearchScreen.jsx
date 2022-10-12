import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { CommonBtn } from "../components/CommonBtn";
import { SearchBar } from "../components/SearchBar";
import { styles } from "../theme/styles";
import travelApi from "../api/travelApi";
import { useNavigation } from "@react-navigation/native";
import { SearchCard } from "../components/SearchCard";

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState("location");

  useEffect(() => {
    loadResults();
  }, [selectedOption, term]);

  const loadResults = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.basicContainer}>
      <SearchBar
        onDebounce={(value) => setTerm(value)}
        onValueChange={(value) => setSelectedOption(value)}
      />

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={searchResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.replace("Details", {
                  location: item.id,
                  jsonParam: selectedOption,
                })
              }
            >
              <SearchCard item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
