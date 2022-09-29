import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from '../theme/styles'

export const Input = ({ text, value }) => {
  return (
    <View style={{ justifyContent: 'center', marginBottom: 10}}>
        <Text style={ styles.inputTitle }>{ text }</Text>
            <TextInput
                value={ value }
                style={ styles.input }
            />   
    </View>
  )
}
