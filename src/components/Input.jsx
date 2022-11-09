import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../theme/styles";

export const Input = ({
  text,
  value,
  visible,
  onChangeText,
  onBlur,
  keyboard,
}) => {
  return (
    <View style={{ justifyContent: "center", marginBottom: 5 }}>
      <Text style={styles.inputTitle}>{text}</Text>
      <TextInput
        value={value}
        style={styles.input}
        secureTextEntry={visible}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboard}
        autoCapitalize={false}
      />
    </View>
  );
};
