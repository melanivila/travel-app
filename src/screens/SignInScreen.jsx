import React, { useState } from 'react'
import backgroundImage from "../../assets/background-home.jpg";
import { ImageBackground, Text, View } from 'react-native'
import { COLORS } from '../theme/theme';
import { styles } from "../theme/styles";
import { Input } from '../components/Input';
import { CommonBtn } from "../components/CommonBtn";


export const SingInScreen = () => {

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

  return (
    <>
            <ImageBackground
                source={backgroundImage}
                style={{ flex: 1 }}
                resizeMode="cover"
                blurRadius={3}
            >
                <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack3 }}>
                    <View style={styles.inputsContainer}>
                                <Text style={ styles.title }>TravelOn</Text>
                                    <View>
                                        <Input
                                            text='Email:'
                                            value={ email }
                                        />
                                        <Input
                                            text='Password:'
                                            value={ password }
                                        />
                                        <Input
                                            text='Confirm Password:'
                                            value={ confirmPassword }
                                        />
                                    </View>
                                <View>
                                    <Text style={{ color:'red', marginBottom: 10 }}>Validations here</Text>
                                </View>
                                <View>
                                    <CommonBtn title="Sign in"/>
                                </View>
                    </View>
                </View>
            </ImageBackground>
    </>
  )
}

