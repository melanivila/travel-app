import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Header, SearchBar, SearchCard } from "../components";
import { styles } from "../theme/styles";
import travelApi from "../api/travelApi";
import { useNavigation } from "@react-navigation/native";

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
    <>
      <Header
        title="Find here"
        subTitle="what you're looking for"
        icon="heart-outline"
      />
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
    </>
  );
};
