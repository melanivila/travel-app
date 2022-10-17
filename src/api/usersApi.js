import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const baseURL = "http://192.168.0.80:8080/api";

const usersApi = axios.create({ baseURL });

usersApi.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers["x-token"] = token;
  }
  return config;
});

export default usersApi;
