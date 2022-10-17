import React, { useState } from "react";
import { FlatList, Keyboard, TouchableOpacity, View } from "react-native";
import { Header, Loading, SearchBar, SearchCard } from "../components";
import { styles } from "../theme/styles";
import { useNavigation } from "@react-navigation/native";
import { useSearchData } from "../hooks/useSearchData";

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("location");
  const { loading, searchResults } = useSearchData({ term, selectedOption });

  return (
    <>
      <Header
        title="Find here"
        subTitle="what you're looking for"
        icon="heart-outline"
      />
      <View style={styles.basicContainer} onPress={Keyboard.dismiss()}>
        <SearchBar
          onDebounce={(value) => setTerm(value)}
          onValueChange={(value) => setSelectedOption(value)}
        />
        {loading ? (
          <Loading />
        ) : (
          <View style={{ marginVertical: 30 }}>
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
        )}
      </View>
    </>
  );
};
