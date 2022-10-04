import React, { useState, useEffect } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
// import { CommonBtn } from "../components/CommonBtn";
import { SearchBar } from "../components/SearchBar";
import { styles } from "../theme/styles";
import { screenWidth, SIZES } from "../theme/theme";
import travelApi from "../api/travelApi";
// import axios from "axios";
// import { useDebounceValue } from "../hooks/useDebounceValue";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState("location");

  useEffect(() => {
    loadResults();
    console.log(selectedOption, term);
    console.log(
      `${selectedOption}.json?annotate=trigram:${term}&trigram=%3E=0.5&count=10`
    );
  }, [selectedOption, term]);

  const loadResults = async () => {
    // let params;
    // if (selectedOption === "location") {
    //   params = "fields=id,name,score,country_id,parent_id,snippet,images";
    // }
    // if (selectedOption === "poi") {
    //   params = "fields=id,name,score,snippet,images";
    // }
    const res = await travelApi.get(
      `/${selectedOption}.json?annotate=trigram:${term}&trigram=%3E=0.5&count=10`
    );
    setSearchResults(res.data.results);
  };

  return (
    <View style={styles.basicContainer}>
      <SearchBar
        onDebounce={(value) => setTerm(value)}
        onValueChange={(value) => setSelectedOption(value)}
      />
      {/* <ScrollView> */}
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: SIZES.radius,
              width: screenWidth - 40,
              top: 70,
              marginVertical: 10,
              margin: 10,
            }}
            key={item.id}
          >
            {item.images.length == !0 && (
              <Image
                source={{
                  uri: item.images[0].source_url,
                  // images.length > 2
                  //   ? images[0].sizes.medium.url
                  //   : images[0].sizes.medium.url,
                }}
                style={{
                  width: 120,
                  height: 100,
                  borderRadius: SIZES.radius,
                }}
                resizeMode="cover"
              />
            )}
            <View
              style={{
                flexDirection: "column",
                width: screenWidth - 170,
              }}
            >
              <Text onPress={() => console.log(item.images[0].source_url)}>
                {item.name}
              </Text>
              <Text>{item.snippet}</Text>
            </View>
          </View>
        )}
        data={searchResults}
      />
      {/* {searchResults?.map(({ id, name, snippet, images }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: SIZES.radius,
              width: screenWidth - 40,
              top: 70,
              marginVertical: 10,
              margin: 10,
            }}
            key={id}
          >
            {images.length == !0 && (
              <Image
                source={{
                  uri: images[0].source_url,
                  // images.length > 2
                  //   ? images[0].sizes.medium.url
                  //   : images[0].sizes.medium.url,
                }}
                style={{
                  width: 120,
                  height: 100,
                  borderRadius: SIZES.radius,
                }}
                resizeMode="cover"
              />
            )}
            <View
              style={{
                flexDirection: "column",
                width: screenWidth - 170,
              }}
            >
              <Text onPress={() => console.log(images[0].source_url)}>
                {name}
              </Text>
              <Text>{snippet}</Text>
            </View>
          </View>
        ))} */}
      {/* </ScrollView> */}
      {/* <View style={{ bottom: 80 }}>
        <CommonBtn title="Search" />
      </View> */}
    </View>
  );
};
