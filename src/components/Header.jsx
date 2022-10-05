import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/styles';
import Ionicons from "@expo/vector-icons/Ionicons";

export const Header = ({ icon, title, subTitle }) => {
  return (
    <View style={ styles.loguedScreenHeader }>
      <Image
        source= {require("../assets/TempLogo.png")}
        style={{ width: 60, height: 60 }}
      />
    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{ title }</Text>
    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{ subTitle }</Text>
    <TouchableOpacity>
    {<Ionicons
      name= { icon }
      size={ 35 }
      color= 'black'
    />}
    </TouchableOpacity>
  </View>
  )
}
