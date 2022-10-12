import React from 'react';
import { View } from 'react-native';
import { ImgBackground } from '../components/ImgBackground';
import { ProfileCard } from '../components/ProfileCard';
import useRandomBackground from '../hooks/useRandomBackground';

export const ProfileScreen = () => {

    const { uri } = useRandomBackground();

  return (

    <>
      <ImgBackground uri={ uri }>
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 90 }}>
            <ProfileCard email={ 'juanito@juanito.com' } username />
        </View>
      </ImgBackground>
    </>
  )
}
