import React, { useState } from 'react'
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/styles';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../theme/theme';

export const UserModal = ({ modalVisible, setModalVisible }) => {

    const [ text, setText ] = useState("");

  return (
    <View style={{ marginTop: 22 }}>
        <Modal
            animationType= 'fade'
            transparent={ true }
            visible={ modalVisible }
            onRequestClose={() => {
                Alert.alert('Window has been closed')
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                    <View style={ styles.modalBackground }>
                        <View>
                            <Text style={ styles.modalText }>Change username:</Text>
                            <TextInput
                                style={{
                                    backgroundColor: COLORS.transparentWhite,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                    width: 0,
                                    height: 3,
                                    },
                                    shadowOpacity: 1,
                                    shadowRadius: 4.65,
                                    elevation: 11,                        
                                }}
                                onChangeText={ console.log( text ) }
                                value={ text }
                            />

                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible( false )
                                    }}>
                                        <Text style={ styles.deleteAccountBtn }>Close</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible( false )
                                        setText( username => [ text, ...username ] )
                                    }}>
                                        <Text style={ styles.saveBtn }>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        </Modal>
    </View>
  )
}
