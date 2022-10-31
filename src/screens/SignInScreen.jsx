import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import {
  Input,
  CommonBtn,
  BackIcon,
  ImgBackground,
  EyeIcon,
} from "../components";
import { Formik } from "formik";
import { SignInSchema } from "../validations/SignInSchema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firebase";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SingInScreen = ({ route }) => {
  const { uri } = route.params;
  const [isHidden, setIsHidden] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const [initializing, setInitializing] = useState(true);

  const stateChange = (user) => {
    setUser((prev) => (prev = user));
    if (initializing) setInitializing((prev) => (prev = false));
  };

  const storeUser = async (user) => {
    try {
      const userEmail = JSON.stringify(user);
      await AsyncStorage.setItem("email", userEmail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const suscriber = auth.onAuthStateChanged(stateChange);
    return suscriber;
  }, []);

  const handleRegister = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setUser((prev) => ({ ...prev, email: values.email }));
        storeUser(values.email);
      })
      .catch((err) => console.log(err));
  };

  if (initializing) return <ActivityIndicator />;

  return (
    <>
      <ImgBackground uri={uri}>
        <BackIcon name="arrow-back-outline" size={45} color="white" />
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => handleRegister(values)}
          validationSchema={SignInSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.basicContainer}>
              <Text style={styles.title}>Sign In</Text>
              <View style={styles.inputsContainer}>
                <View>
                  <Input
                    text="Email:"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboard="email-address"
                  />
                  {errors.email && touched.email ? (
                    <Text style={styles.validationText}>{errors.email}</Text>
                  ) : null}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Input
                      text="Password:"
                      value={values.password}
                      visible={isHidden}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                    <TouchableOpacity
                      onPress={() => setIsHidden(!isHidden)}
                      style={{
                        zIndex: 999,
                        position: "absolute",
                        right: 10,
                      }}
                    >
                      <EyeIcon isHidden={isHidden} />
                    </TouchableOpacity>
                  </View>
                  {errors.password && touched.password ? (
                    <Text style={styles.validationText}>{errors.password}</Text>
                  ) : null}
                  <Input
                    text="Confirm Password:"
                    value={values.confirmPassword}
                    visible={isHidden}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Text style={styles.validationText}>
                      {errors.confirmPassword}
                    </Text>
                  ) : null}
                </View>
                <View>
                  <CommonBtn title="Sign in" onPress={handleSubmit} />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ImgBackground>
    </>
  );
};
