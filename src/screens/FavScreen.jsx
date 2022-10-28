import React, { useContext, useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Header, SearchCard } from "../components";
import { styles } from "../theme/styles";

export const FavScreen = ({ navigation }) => {
  const { favList } = useFirestore();

  return (
    <>
      <Header title={"Travel On"} subTitle={"Favorites"} render />
      <View style={{ ...styles.basicContainer, marginVertical: 30 }}>
        {favList?.length !== 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            data={favList}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.replace("Details", {
                    location: item.id,
                    jsonParam: item.jsonParam,
                  })
                }
              >
                <SearchCard item={item} deleteIcon />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </>
  );
};
