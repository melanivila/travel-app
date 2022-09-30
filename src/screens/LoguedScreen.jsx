import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/styles'
import Ionicons from "@expo/vector-icons/Ionicons";

export const LoguedScreen = () => {
  return (
    <View>
        <View style={{ flexDirection: 'row' }}>
          <Image
              source= { require('../assets/TempLogo.png') }
          />
          <Text style={styles.title}>TravelOn</Text>
          <Ionicons
            name= 'heart-outline'
            size={ 35 }
            color= 'black'
          />
        </View>
    </View>
  )
}
