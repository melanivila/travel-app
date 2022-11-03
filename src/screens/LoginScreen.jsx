import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";
import {
  Input,
  CommonBtn,
  BackIcon,
  ImgBackground,
  EyeIcon,
} from "../components";
import { Formik } from "formik";
import { LogInSchema } from "../validations/LogInSchema";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../theme/theme";

export const LoginScreen = ({ route, navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [isHidden, setIsHidden] = useState(true);

  const storeUser = async (user) => {
    try {
      const userEmail = JSON.stringify(user);
      await AsyncStorage.setItem("email", userEmail);
    } catch (err) {
      console.log(err);
    }
  };

  const { uri } = route.params;

  const handleLogin = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        setUser((prev) => ({ ...prev, email: values.email }));
        storeUser(values.email);
      })
      .catch((err) => {
        if ( err = "auth/user-not-found" || "auth/wrong-password" ){
          return alert("Email or password are wrong");
        } else {
          return alert("We couldn't process the petition, try again later");
        }
      });
  };

  return (
    <>
      <ImgBackground uri={uri}>
        <BackIcon name="arrow-back-outline" size={45} color="white" />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleLogin(values)}
          validationSchema={LogInSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <Text style={styles.title}>Login</Text>
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
                </View>
                <View style={{ alignItems: "center" }}>
                  <CommonBtn title="Log In" onPress={handleSubmit} />
                  <Text style={{ color: COLORS.white, fontSize: SIZES.body3 }}>
                    Forgot your password?{" "}
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: COLORS.bluesky,
                        textDecorationLine: "underline",
                      }}
                      onPress={() => navigation.navigate("ForgotPassword", { uri })}
                    >
                      Reset
                    </Text>
                  </Text>
                </View>
              </View>
              </View>
          )}
        </Formik>
      </ImgBackground>
    </>
  );
};
