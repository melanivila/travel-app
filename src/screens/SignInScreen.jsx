import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { Input } from "../components/Input";
import { CommonBtn } from "../components/CommonBtn";
import { BackIcon } from "../components/BackIcon";
import { ImgBackground } from "../components/ImgBackground";
import { EyeIcon } from "../components/EyeIcon";
import { Formik } from "formik";
import { SignInSchema } from "../validations/SignInSchema";

export const SingInScreen = ({ route }) => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();
  const [isHidden, setIsHidden] = useState(true);

  const { uri } = route.params;

  return (
    <>
      <ImgBackground uri={uri}>
        <BackIcon
          // onPress={console.log("atras")}
          name="arrow-back-outline"
          size={45}
          color="white"
        />
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={ values => console.log( values )}
          validationSchema={ SignInSchema }
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View style={styles.inputsContainer}>
              <View>
                <Input
                  text="Email:"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                  {
                    errors.email && touched.email ? (<Text style={ styles.validationText }>{errors.email}</Text>): null
                  }
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Input
                    text="Password:"
                    value={values.password}
                    visible={isHidden}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}  
                  />
                  <TouchableOpacity onPress={ () => setIsHidden( !isHidden ) }>
                    <EyeIcon isHidden={ isHidden } />
                  </TouchableOpacity>
                </View>
                {
                  errors.password && touched.password ? (<Text style={ styles.validationText }>{errors.password}</Text>): null
                }
                <Input
                  text="Confirm Password:"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
                {
                  errors.confirmPassword && touched.confirmPassword ? (<Text style={ styles.validationText }>{errors.confirmPassword}</Text>): null
                }
              </View>
              <View>
                <CommonBtn
                  title="Sign in"
                  onPress={handleSubmit}
                />
              </View>
            </View>

        )}

        </Formik>
      </ImgBackground>
    </>
  );
};
