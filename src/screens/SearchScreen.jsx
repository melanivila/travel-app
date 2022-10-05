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
    // console.log(selectedOption, term);
    // console.log(
    //   `${selectedOption}.json?annotate=trigram:${term}&trigram=%3E=0.5&count=10`
    // );
  }, [selectedOption, term]);

  const loadResults = async () => {
    try {
      let url;
      if (selectedOption === "location") {
        url = `/location.json?annotate=trigram:${term}&trigram=%3E=0.5&count=10&fields=all`;
      }
      if (selectedOption === "poi") {
        url = `/poi.json?annotate=trigram:${term}&trigram=%3E=0.5&count=5&fields=all`;
      }
      const res = await travelApi.get(url);
      const fetchedData = res.data.results;
      // console.log(url, selectedOption);

      setSearchResults(fetchedData);
      // console.log(fetchedData[0].images[0].sizes.original.url);
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
      <ScrollView>
        {/* {searchResults && ( */}
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            // console.log(index + "has" + item.images[0].source_url);
            // console.log(item.images[0]);
            // console.log(item.images);

            return (
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
                {item.images[0].source_url == !"undefined" ? (
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
                ) : (
                  <Image
                    source={{
                      uri: "https://www.quicideportes.com/assets/images/custom/no-image.png",
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
            );
          }}
          data={searchResults}
        />
      )} */}
        {searchResults?.map((item) => {
          {
            /* console.log(index + "has" + item.images.length); */
          }
          {
            /* console.log(item.images[0]); */
          }
          {
            /* console.log(item.images[0].source_url ? "true" : "false"); */
          }
          return (
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
              {item.images.length === 0 ? (
                <Image
                  source={{
                    uri: "https://www.quicideportes.com/assets/images/custom/no-image.png",
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
              ) : (
                <Image
                  source={{
                    uri:
                      item.images.length === 1
                        ? item.images[0].source_url
                        : item.images.length > 2
                        ? item.images[0].sizes.medium.url
                        : null,

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
                <Text
                //  onPress={() => console.log(item.images[0].source_url)}
                >
                  {item.name}
                </Text>
                <Text>{item.snippet}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* <View style={{ bottom: 80 }}>
        <CommonBtn title="Search" />
      </View> */}
    </View>
  );
};
