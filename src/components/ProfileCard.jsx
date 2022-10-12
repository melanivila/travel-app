import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from '../theme/styles';
import { COLORS, screenHeight, screenWidth, SIZES } from '../theme/theme';
import Ionicons from "@expo/vector-icons/Ionicons";
import { UserModal } from "./UserModal";
import { useNavigation } from '@react-navigation/native';

export const ProfileCard = ({ username, email }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

  return (
    <View
        style={ styles.profileCard }
    >
        <View style={{ flexDirection: 'row' }}>

            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text style={ styles.profileText }>Username:</Text>
                <Text style={{ marginHorizontal: 10, fontSize: 15 }}>{ username }</Text>

                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { setModalVisible( true ) }}>
                    {<Ionicons name= 'create-outline' size={25} color="#525252"/>}
                </TouchableOpacity>
            </View>

        </View>

            <View>
                {
                    modalVisible
                    && <UserModal
                            setModalVisible= { setModalVisible }
                            modalVisible
                            username
                        />
                }            
            </View>

        <View style={{ top: 20, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={ styles.profileText }>Email:</Text>
            <Text style={{ marginHorizontal: 10, fontSize: 15 }}>{ email }</Text>
        </View>

        <TouchableOpacity style= {{ top: 80 }}>
            {<Ionicons name= 'heart-outline' size={35} color={ COLORS.lightblue } onPress={ () => navigation.navigate('Fav') }/>}
        </TouchableOpacity>

        <View style={{ top: 120 }}>
            <TouchableOpacity>
                <Text style={ styles.deleteAccountBtn }>Delete Account</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}
