import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { LoguedCard } from './LoguedCard';

export const CardFlatList = ({ title, item, OnPress }) => {
  return (
    
    <View style={{
        height: ( title ) ? 260 : 220,
      }}>
        {
          title && <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 20 }}>{ title }</Text>
        }
          <FlatList
            data={ item }
            renderItem={ ({ item }) => (
              <TouchableOpacity
                OnPress = { OnPress }
              >
                <LoguedCard
                  item= { item }
                />
              </TouchableOpacity>
            )}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
          />
    </View>

  )
}
