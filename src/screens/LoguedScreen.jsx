import React from 'react'
import { ScrollView, View } from 'react-native'
import { usePopularLocation } from '../hooks/usePopularLocation';
import { CardFlatList } from '../components/CardFlatList';
import { Header } from '../components/Header';


export const LoguedScreen = () => {

  const { popularIslands, popularCountries, popularPlaces, popularReserves, popularCities, } = usePopularLocation();

  // console.log(uri);
  return (
    <View style={{ marginBottom: 140 }}>
      <Header title="Travel On"
              icon= "heart-outline"
      />
        <ScrollView>
          <View style={{ marginTop: 80 }}>
          <CardFlatList
            title="Popular Islands"
            item={popularIslands}
            OnPress={console.log("Details")}
          />
          <CardFlatList
            title="Popular Countries"
            item={popularCountries}
            OnPress={console.log("Details")}
          />
          <CardFlatList
            title="Popular Places"
            item={popularPlaces}
            OnPress={console.log("Details")}
          />
          <CardFlatList
            title="Popular Reserves"
            item={popularReserves}
            OnPress={console.log("Details")}
          />
          <CardFlatList
            title="Popular Cities"
            item={popularCities}
            OnPress={console.log("Details")}
          />
    </View>
        </ScrollView>
    </View>
  )
}
