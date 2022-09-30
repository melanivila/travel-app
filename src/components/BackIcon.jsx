import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export const BackIcon = ({ onPress, name, size, color }) => {
  return (
    <TouchableOpacity
        style={{ top: 40, left: 20, }}
        onPress={ onPress }
    >
        <Ionicons
            name={ name }
            size={ size }
            color={ color }
        />
    </TouchableOpacity>
  )
}
