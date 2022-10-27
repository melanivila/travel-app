import axios from "axios";
import Constants from "expo-constants";

const travelApi = axios.create({
  baseURL: "https://www.triposo.com/api/20220705",
  params: {
    token: Constants.manifest?.extra?.triposoApiKey,
    account: Constants.manifest?.extra?.triposoAccount,
  },
});

export default travelApi;
