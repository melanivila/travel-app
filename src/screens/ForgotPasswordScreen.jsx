import React from "react";
import { Formik } from "formik";
import { Text, Alert, View } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { ForgotPasswordSchema } from "../validations/ForgotPasswordSchema";
import { BackIcon, CommonBtn, ImgBackground, Input } from "../components";
import { auth } from "../db/firebase";
import { styles } from "../theme/styles";

export const ForgotPasswordScreen = ({ route, navigation }) => {
  const { uri } = route.params;

  const handleReset = (values) => {
    sendPasswordResetEmail(auth, values.email)
      .then(() =>
        Alert.alert(
          "Your password has been reset",
          `Check your inbox ${values.email}`,
          [{ text: "OK", onPress: () => navigation.goBack() }]
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <ImgBackground uri={uri}>
      <BackIcon name="arrow-back-outline" size={45} color="white" />
      <Formik
        initialValues={{ email: "" }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => handleReset(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.basicContainer}>
            <Text style={styles.title}>Reset password</Text>
            <View
              style={{
                ...styles.inputsContainer,
                justifyContent: "center",
              }}
            >
              <Input
                text="Email:"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboard="email-address"
              />
              {errors.email && (
                <Text style={styles.validationText}>{errors.email}</Text>
              )}
            </View>
            <CommonBtn title="Reset password" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ImgBackground>
  );
};
