import React from 'react'
import { ScrollView, View } from 'react-native'
import { usePopularLocation } from '../hooks/usePopularLocation';
import { CardFlatList } from '../components/CardFlatList';
import { Header } from '../components/Header';


export const LoguedScreen = () => {

  const { uri } = usePopularLocation();
  // console.log(uri);
  return (
    <View style={{ marginBottom: 140 }}>
      <Header/>
        <ScrollView>
          <View style={{ marginTop: 80 }}>
            <CardFlatList
              title = 'Popular Places'
              item = { uri }
              OnPress = { console.log('Details') }
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <CardFlatList
              title = 'Popular Islands'
              item = { uri }
              OnPress = { console.log('Details') }
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <CardFlatList
              title = 'Popular Reserves'
              item = { uri }
              OnPress = { console.log('Details') }
            />
          </View>
        </ScrollView>
    </View>
  )
}
