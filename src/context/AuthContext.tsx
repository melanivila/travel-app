import React, { useReducer, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authReducer } from "./authReducer";
import usersApi from "../api/usersApi";

const authInitialState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) return dispatch({ type: "notAuthenticated" });

    const res = await usersApi.get("/auth");

    if (res.status !== 200) {
      return dispatch({ type: "notAuthenticated" });
    }

    if (token)
      return dispatch({
        type: "signUp",
        payload: { token: res.data.token, user: res.data.usuario },
      });
  };

  const signIn = async ({ correo, password }) => {
    try {
      const { data } = await usersApi.post("/auth/login", { correo, password });
      dispatch({
        type: "signUp",
        payload: { token: data.token, user: data.usuario },
      });
      await AsyncStorage.setItem("token", data.token);
    } catch (error: any) {
      // console.log(error)
      // console.log(error.response.data.msg)
      dispatch({
        type: "addError",
        payload: error.response.data.msg || "Información incorrecta",
      });
    }
  };
  const signUp = async ({ correo, password, nombre }) => {
    try {
      const { data } = await usersApi.post("/usuarios", {
        correo,
        password,
        nombre,
      });
      dispatch({
        type: "signUp",
        payload: { token: data.token, user: data.usuario },
      });
      await AsyncStorage.setItem("token", data.token);
      // console.log(data.usuario)
    } catch (error: any) {
      // console.log(error)
      // console.log(error.response.data.msg)
      dispatch({
        type: "addError",
        payload: error.response.data.errors[0].msg || "Revise la información",
      });
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "logOut" });
  };
  const removeError = () => {
    dispatch({ type: "removeError" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
