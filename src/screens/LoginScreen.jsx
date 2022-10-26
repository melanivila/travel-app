import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import { Input } from "../components/Input";
import { CommonBtn } from "../components/CommonBtn";
import { BackIcon } from "../components/BackIcon";
import { ImgBackground } from "../components/ImgBackground";
import { EyeIcon } from "../components/EyeIcon";
import { Formik } from "formik";
import { SignupSchema } from "../validations/SignupSchema";
// import { useNavigation } from "@react-navigation/native";

export const LoginScreen = ({ route, navigation }) => {
  // const navigation = useNavigation();

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
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
          initialValues={{ email: "", password: "" }}
          onSubmit={ values => console.log( values )}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched  }) => (
            
            <View style={styles.basicContainer}>
              <View style={styles.inputsContainer}>
                <View>
                  <Input
                    text="Email:"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
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
                    <TouchableOpacity onPress={ () => setIsHidden(!isHidden) }>
                      <EyeIcon isHidden={ isHidden }/>
                    </TouchableOpacity>
                  </View>
                  {
                    errors.password && touched.password ? (<Text style={ styles.validationText }>{errors.password}</Text>): null
                  }
                </View>
              </View>
              <CommonBtn
                title="Log In"
                onPress={handleSubmit}
              />
            </View>

          )}
        </Formik>
      </ImgBackground>
    </>
  );
};
