import React from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from '../theme/styles';
import { COLORS, screenHeight, screenWidth, SIZES } from '../theme/theme';
import Ionicons from "@expo/vector-icons/Ionicons";

export const ProfileCard = ({ username, email }) => {
  return (
    <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: screenHeight * 0.48,
            width: screenWidth - 80,
            borderRadius: SIZES.radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 20,
            },
                shadowOpacity: 0.9,
                shadowRadius: 7.49,
                elevation: 10,
            }}
    >
        <View style={{ flexDirection: 'row' }}>

            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text style={ styles.profileText }>Username:</Text>
                <Text style={{ marginHorizontal: 10, fontSize: 15 }}>{ username }</Text>
            </View>

            <TouchableOpacity style={{ marginHorizontal: 10 }}>
                {<Ionicons name= 'create-outline' size={25} color="#525252" onPress={ console.log('Editar username') }/>}
            </TouchableOpacity>

        </View>
        <View style={{ top: 20, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={ styles.profileText }>Email:</Text>
            <Text style={{ marginHorizontal: 10, fontSize: 15 }}>{ email }</Text>
        </View>
        <TouchableOpacity style= {{ top: 80 }}>
            {<Ionicons name= 'heart-outline' size={35} color={ COLORS.lightblue } onPress={ console.log('Editar username') }/>}
        </TouchableOpacity>
        <View style={{ top: 120 }}>
            <TouchableOpacity>
                <Text style={ styles.deleteAccountBtn }>Delete Account</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}
